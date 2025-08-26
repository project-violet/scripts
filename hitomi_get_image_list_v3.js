// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 1;
switch (g) {
case 1235:
case 3754:
case 99:
case 1194:
case 1133:
case 3909:
case 3852:
case 3701:
case 2866:
case 3690:
case 1928:
case 584:
case 3663:
case 2178:
case 2391:
case 2181:
case 3546:
case 439:
case 3603:
case 1384:
case 3046:
case 2445:
case 3761:
case 3969:
case 3992:
case 999:
case 2227:
case 7:
case 1220:
case 1812:
case 4012:
case 1486:
case 1714:
case 737:
case 3469:
case 3492:
case 94:
case 2259:
case 43:
case 36:
case 985:
case 1428:
case 1282:
case 209:
case 272:
case 1951:
case 681:
case 882:
case 1306:
case 3323:
case 3843:
case 193:
case 259:
case 1632:
case 2003:
case 1425:
case 2720:
case 628:
case 2590:
case 3389:
case 1891:
case 2948:
case 1930:
case 2214:
case 560:
case 387:
case 1597:
case 3411:
case 2563:
case 224:
case 20:
case 1430:
case 3911:
case 3719:
case 2437:
case 1238:
case 1451:
case 1685:
case 1247:
case 1404:
case 916:
case 143:
case 2312:
case 1925:
case 2492:
case 3945:
case 3227:
case 635:
case 774:
case 527:
case 4089:
case 3391:
case 3178:
case 2663:
case 1697:
case 137:
case 2852:
case 476:
case 2754:
case 1532:
case 2969:
case 2992:
case 2761:
case 3445:
case 1370:
case 2046:
case 1032:
case 2603:
case 556:
case 2546:
case 722:
case 3437:
case 793:
case 2911:
case 3448:
case 35:
case 3312:
case 3735:
case 978:
case 491:
case 653:
case 3240:
case 1026:
case 3003:
case 1796:
case 359:
case 1877:
case 3782:
case 2323:
case 1071:
case 2199:
case 2162:
case 1526:
case 372:
case 309:
case 2102:
case 3563:
case 287:
case 743:
case 2411:
case 3937:
case 3214:
case 3948:
case 3590:
case 1088:
case 1352:
case 813:
case 1588:
case 3090:
case 2742:
case 4068:
case 2844:
case 2926:
case 2324:
case 2139:
case 353:
case 2971:
case 79:
case 1736:
case 3883:
case 2988:
case 3349:
case 497:
case 1808:
case 3372:
case 749:
case 2628:
case 2488:
case 2365:
case 1011:
case 447:
case 228:
case 2810:
case 799:
case 3025:
case 3795:
case 609:
case 2280:
case 1645:
case 3525:
case 281:
case 74:
case 2305:
case 2753:
case 1158:
case 1509:
case 465:
case 896:
case 2630:
case 1780:
case 3331:
case 1009:
case 1637:
case 1946:
case 521:
case 2485:
case 890:
case 4024:
case 1092:
case 1069:
case 3350:
case 3107:
case 1569:
case 1592:
case 840:
case 131:
case 1805:
case 710:
case 3118:
case 1865:
case 4065:
case 716:
case 2236:
case 1310:
case 846:
case 1463:
case 3810:
case 2497:
case 3365:
case 3471:
case 2525:
case 974:
case 1403:
case 2004:
case 199:
case 575:
case 253:
case 3139:
case 2504:
case 3324:
case 3926:
case 2857:
case 2551:
case 1850:
case 203:
case 3742:
case 922:
case 1963:
case 3628:
case 1537:
case 2115:
case 14:
case 455:
case 1990:
case 4031:
case 1037:
case 405:
case 2030:
case 3988:
case 185:
case 1048:
case 1713:
case 2118:
case 3432:
case 1545:
case 1045:
case 3985:
case 3317:
case 778:
case 3236:
case 2331:
case 731:
case 3308:
case 1774:
case 4072:
case 110:
case 4049:
case 1193:
case 2028:
case 1160:
case 3753:
case 66:
case 3932:
case 1100:
case 2586:
case 3141:
case 433:
case 116:
case 3485:
case 3651:
case 943:
case 4037:
case 2864:
case 1531:
case 4048:
case 2762:
case 105:
case 620:
case 592:
case 2029:
case 3756:
case 93:
case 3309:
case 1031:
case 1196:
case 2529:
case 44:
case 155:
case 3120:
case 1984:
case 283:
case 2557:
case 817:
case 1624:
case 499:
case 351:
case 2825:
case 1716:
case 301:
case 939:
case 2119:
case 3294:
case 3510:
case 607:
case 542:
case 3010:
case 1665:
case 49:
case 133:
case 3138:
case 2101:
case 2886:
case 3657:
case 2644:
case 3923:
case 1668:
case 1330:
case 3781:
case 3989:
case 1572:
case 1608:
case 1364:
case 2337:
case 1549:
case 3629:
case 410:
case 2161:
case 1072:
case 2610:
case 1202:
case 1262:
case 1299:
case 261:
case 2912:
case 1845:
case 523:
case 844:
case 1406:
case 689:
case 3119:
case 1443:
case 3825:
case 705:
case 970:
case 2775:
case 1017:
case 976:
case 2010:
case 1278:
case 695:
case 2135:
case 4011:
case 2294:
case 2309:
case 68:
case 1649:
case 3991:
case 3762:
case 3799:
case 197:
case 3557:
case 1943:
case 2369:
case 1068:
case 2977:
case 1970:
case 2044:
case 2120:
case 1565:
case 1114:
case 667:
case 1065:
case 1256:
case 431:
case 941:
case 3912:
case 1505:
case 1650:
case 2923:
case 991:
case 1140:
case 1794:
case 1733:
case 1024:
case 2138:
case 3412:
case 1892:
case 2147:
case 4069:
case 3154:
case 165:
case 2629:
case 4009:
case 1631:
case 114:
case 3828:
case 3153:
case 1734:
case 1023:
case 73:
case 898:
case 3255:
case 2405:
case 661:
case 862:
case 3187:
case 170:
case 3643:
case 1523:
case 2846:
case 580:
case 176:
case 3397:
case 3972:
case 3566:
case 947:
case 2552:
case 2388:
case 1215:
case 997:
case 2718:
case 718:
case 3221:
case 1885:
case 3863:
case 1410:
case 564:
case 2666:
case 3739:
case 3890:
case 2417:
case 515:
case 4088:
case 1888:
case 2043:
case 1871:
case 2570:
case 389:
case 4026:
case 1218:
case 830:
case 3803:
case 1346:
case 2968:
case 1612:
case 226:
case 1444:
case 2468:
case 3450:
case 2200:
case 1267:
case 2293:
case 2260:
case 965:
case 3431:
case 3258:
case 2195:
case 345:
case 770:
case 3718:
case 3965:
case 955:
case 422:
case 776:
case 3846:
case 3924:
case 3326:
case 2506:
case 2643:
case 2187:
case 3405:
case 3198:
case 3767:
case 474:
case 2153:
case 139:
case 3684:
case 1758:
case 2949:
case 2741:
case 504:
case 2566:
case 2972:
case 1363:
case 554:
case 267:
case 3200:
case 443:
case 2450:
case 3385:
case 933:
case 326:
case 320:
case 1429:
case 612:
case 3408:
case 2431:
case 3260:
case 3234:
case 1755:
case 295:
case 1091:
case 2652:
case 1776:
case 1689:
case 2863:
case 357:
case 1623:
case 3715:
case 2950:
case 1957:
case 651:
case 3543:
case 289:
case 601:
case 2584:
case 3043:
case 3127:
case 3068:
case 1057:
case 2386:
case 2550:
case 2624:
case 1702:
case 1851:
case 3568:
case 1083:
case 3943:
case 691:
case 892:
case 751:
case 2328:
case 1799:
case 517:
case 1029:
case 397:
case 4064:
case 1864:
case 573:
case 2031:
case 3008:
case 2196:
case 1529:
case 255:
case 3649:
case 1491:
case 3517:
case 2665:
case 3278:
case 3470:
case 1345:
case 1825:
case 1119:
case 842:
case 2608:
case 1337:
case 1828:
case 2049:
case 1348:
case 594:
case 365:
case 1161:
case 3809:
case 2549:
case 4086:
case 1101:
case 3024:
case 3140:
case 1154:
case 3869:
case 2906:
case 2668:
case 3650:
case 2351:
case 3275:
case 3505:
case 1912:
case 2325:
case 670:
case 2406:
case 823:
case 3114:
case 676:
case 1775:
case 428:
case 1510:
case 247:
case 783:
case 2811:
case 2443:
case 481:
case 2470:
case 3484:
case 1477:
case 3605:
case 2281:
case 2970:
case 3386:
case 1044:
case 2068:
case 1756:
case 355:
case 3196:
case 3837:
case 2159:
case 3531:
case 2256:
case 2005:
case 3262:
case 3299:
case 2505:
case 2452:
case 2114:
case 2565:
case 1489:
case 3617:
case 1311:
case 3549:
case 2952:
case 1629:
case 1989:
case 3049:
case 3330:
case 3364:
case 1657:
case 1778:
case 2524:
case 2650:
case 3304:
case 2173:
case 3906:
case 1683:
case 2140:
case 2733:
case 858:
case 2691:
case 886:
case 1052:
case 276:
case 2589:
case 318:
case 1465:
case 1707:
case 2089:
case 1388:
case 2023:
case 1198:
case 1684:
case 3758:
case 339:
case 2523:
case 4046:
case 3303:
case 1924:
case 951:
case 1905:
case 3512:
case 3239:
case 1424:
case 2885:
case 633:
case 33:
case 1718:
case 46:
case 912:
case 1332:
case 815:
case 1043:
case 3983:
case 2871:
case 241:
case 864:
case 2077:
case 1715:
case 2944:
case 1070:
case 2346:
case 530:
case 1417:
case 157:
case 2410:
case 3136:
case 3929:
case 3091:
case 3721:
case 107:
case 487:
case 655:
case 1408:
case 3755:
case 789:
case 1293:
case 1234:
case 605:
case 120:
case 3483:
case 1200:
case 2444:
case 3457:
case 1385:
case 2012:
case 3885:
case 2239:
case 1276:
case 2512:
case 1449:
case 614:
case 23:
case 1472:
case 1949:
case 3589:
case 2390:
case 376:
case 2122:
case 2363:
case 1397:
case 1187:
case 2303:
case 854:
case 1506:
case 3760:
case 3832:
case 804:
case 82:
case 2677:
case 1006:
case 697:
case 145:
case 3910:
case 2755:
case 1258:
case 40:
case 2457:
case 1450:
case 707:
case 57:
case 2241:
case 391:
case 3612:
case 1084:
case 3346:
case 3826:
case 961:
case 4003:
case 2623:
case 1950:
case 1584:
case 409:
case 472:
case 189:
case 647:
case 2929:
case 579:
case 4063:
case 2776:
case 1890:
case 552:
case 1739:
case 4090:
case 274:
case 631:
case 1181:
case 832:
case 1806:
case 76:
case 3370:
case 2740:
case 3:
case 2928:
case 3697:
case 1178:
case 2773:
case 1866:
case 4066:
case 222:
case 769:
case 678:
case 2220:
case 3585:
case 953:
case 2714:
case 1945:
case 3085:
case 903:
case 2486:
case 2727:
case 1063:
case 2097:
case 1720:
case 3352:
case 2964:
case 1937:
case 2366:
case 582:
case 2891:
case 534:
case 1948:
case 866:
case 495:
case 1214:
case 2904:
case 489:
case 860:
case 109:
case 172:
case 1646:
case 2951:
case 4084:
case 293:
case 1782:
case 1156:
case 159:
case 2404:
case 1735:
case 2238:
case 3201:
case 2451:
case 1240:
case 2685:
case 1273:
case 243:
case 787:
case 124:
case 2464:
case 935:
case 3261:
case 1448:
case 16:
case 3282:
case 322:
case 3812:
case 616:
case 3714:
case 3220:
case 2219:
case 2370:
case 3384:
case 1377:
case 3671:
case 2532:
case 1969:
case 1992:
case 1761:
case 850:
case 2343:
case 237:
case 1690:
case 856:
case 3773:
case 1663:
case 3928:
case 2697:
case 1754:
case 928:
case 3235:
case 2:
case 1701:
case 3740:
case 4052:
case 343:
case 3925:
case 3685:
case 426:
case 699:
case 963:
case 2201:
case 3247:
case 420:
case 3464:
case 1719:
case 1389:
case 3891:
case 2088:
case 3597:
case 3366:
case 69:
case 2588:
case 2877:
case 3425:
case 4070:
case 2026:
case 2571:
case 75:
case 3951:
case 1843:
case 3904:
case 3306:
case 1323:
case 724:
case 577:
case 2071:
case 1199:
case 1162:
case 412:
case 1988:
case 385:
case 1628:
case 3963:
case 3990:
case 3548:
case 34:
case 3831:
case 1844:
case 1926:
case 3903:
case 2176:
case 1324:
case 4044:
case 1742:
case 2868:
case 3850:
case 1779:
case 2736:
case 1686:
case 399:
case 1426:
case 693:
case 3298:
case 401:
case 1471:
case 181:
case 1305:
case 349:
case 2645:
case 1365:
case 2011:
case 703:
case 1222:
case 3463:
case 1810:
case 51:
case 39:
case 128:
case 3490:
case 2817:
case 2069:
case 1604:
case 596:
case 3357:
case 2946:
case 1651:
case 2824:
case 316:
case 1485:
case 278:
case 888:
case 3383:
case 3329:
case 3849:
case 3134:
case 2509:
case 2158:
case 3774:
case 622:
case 1308:
case 2009:
case 2637:
case 821:
case 1630:
case 310:
case 1787:
case 2648:
case 987:
case 2865:
case 3611:
case 1317:
case 2310:
case 546:
case 3045:
case 735:
case 2446:
case 674:
case 1432:
case 3713:
case 231:
case 2805:
case 249:
case 3287:
case 3253:
case 1795:
case 1025:
case 3817:
case 2463:
case 1497:
case 3511:
case 1530:
case 2831:
case 3808:
case 24:
case 2548:
case 1213:
case 1997:
case 2537:
case 1372:
case 1564:
case 1030:
case 285:
case 2048:
case 1829:
case 875:
case 2609:
case 153:
case 2692:
case 2669:
case 1883:
case 1004:
case 4083:
case 728:
case 483:
case 1551:
case 103:
case 1857:
case 3310:
case 763:
case 2611:
case 331:
case 1118:
case 3446:
case 2383:
case 2100:
case 3592:
case 1107:
case 3824:
case 2357:
case 1350:
case 3092:
case 3648:
case 924:
case 2872:
case 3009:
case 1331:
case 3780:
case 2774:
case 2295:
case 3158:
case 2160:
case 1167:
case 2193:
case 2134:
case 2849:
case 1028:
case 2329:
case 2001:
case 570:
case 3376:
case 3974:
case 2501:
case 3538:
case 1800:
case 1627:
case 2554:
case 3547:
case 2620:
case 2807:
case 4060:
case 1732:
case 644:
case 3413:
case 2682:
case 1834:
case 576:
case 1315:
case 1172:
case 3913:
case 248:
case 3297:
case 2422:
case 2480:
case 3474:
case 2271:
case 3355:
case 72:
case 1487:
case 2226:
case 1453:
case 1367:
case 2936:
case 2393:
case 1596:
case 3358:
case 1131:
case 3703:
case 3082:
case 3763:
case 1150:
case 2157:
case 857:
case 3144:
case 1640:
case 2285:
case 3601:
case 2183:
case 2300:
case 1788:
case 2647:
case 3654:
case 807:
case 2519:
case 2232:
case 1246:
case 1318:
case 2019:
case 2436:
case 908:
case 617:
case 3535:
case 958:
case 1442:
case 673:
case 3288:
case 53:
case 1263:
case 2297:
case 786:
case 1165:
case 1290:
case 2913:
case 3818:
case 780:
case 3226:
case 1203:
case 1105:
case 129:
case 2474:
case 3480:
case 2619:
case 3554:
case 2321:
case 1540:
case 1073:
case 3501:
case 3054:
case 1040:
case 2974:
case 1124:
case 3001:
case 2038:
case 362:
case 3061:
case 3922:
case 3682:
case 3867:
case 4058:
case 432:
case 2413:
case 484:
case 104:
case 12:
case 27:
case 715:
case 4055:
case 88:
case 1855:
case 2110:
case 1117:
case 3436:
case 1108:
case 1495:
case 2582:
case 3360:
case 1059:
case 3129:
case 889:
case 2661:
case 3393:
case 3936:
case 1341:
case 3647:
case 1821:
case 2654:
case 3300:
case 3638:
case 2790:
case 2144:
case 4076:
case 2839:
case 1027:
case 3333:
case 168:
case 555:
case 3042:
case 273:
case 1622:
case 2704:
case 1435:
case 3079:
case 2802:
case 505:
case 2959:
case 217:
case 3542:
case 1680:
case 1737:
case 2764:
case 475:
case 1748:
case 2862:
case 929:
case 1177:
case 3856:
case 3698:
case 2170:
case 1920:
case 1286:
case 3292:
case 636:
case 3875:
case 3496:
case 954:
case 2095:
case 4016:
case 630:
case 1816:
case 2459:
case 1123:
case 3106:
case 2728:
case 1362:
case 1574:
case 3587:
case 1225:
case 3087:
case 3553:
case 2414:
case 2152:
case 2786:
case 1302:
case 3166:
case 1513:
case 1264:
case 662:
case 2237:
case 861:
case 3695:
case 698:
case 244:
case 123:
case 2440:
case 1438:
case 708:
case 1447:
case 3427:
case 986:
case 768:
case 2269:
case 1711:
case 1919:
case 679:
case 2209:
case 3595:
case 851:
case 652:
case 3095:
case 3725:
case 2496:
case 2542:
case 317:
case 3751:
case 3802:
case 1378:
case 597:
case 1036:
case 3704:
case 373:
case 2042:
case 2996:
case 2579:
case 1536:
case 3170:
case 67:
case 742:
case 2698:
case 611:
case 3899:
case 1381:
case 812:
case 3143:
case 1674:
case 3245:
case 915:
case 2695:
case 3237:
case 3914:
case 3316:
case 1461:
case 964:
case 1375:
case 1401:
case 3473:
case 2553:
case 1080:
case 1901:
case 2053:
case 3728:
case 2881:
case 3098:
case 2106:
case 2878:
case 488:
case 2166:
case 1522:
case 394:
case 108:
case 565:
case 1894:
case 1833:
case 4033:
case 4094:
case 723:
case 2211:
case 1769:
case 1792:
case 3414:
case 158:
case 3679:
case 3921:
case 3099:
case 3729:
case 219:
case 3976:
case 2103:
case 3374:
case 1708:
case 2056:
case 1387:
case 3681:
case 2322:
case 1768:
case 3502:
case 2163:
case 2744:
case 2265:
case 3002:
case 238:
case 1836:
case 3249:
case 1415:
case 682:
case 881:
case 3272:
case 950:
case 2575:
case 3421:
case 956:
case 2224:
case 2075:
case 1717:
case 828:
case 2602:
case 1033:
case 458:
case 290:
case 1822:
case 1342:
case 4022:
case 1379:
case 1594:
case 2336:
case 1967:
case 2934:
case 2993:
case 2217:
case 1907:
case 1418:
case 578:
case 2900:
case 2699:
case 1880:
case 3146:
case 4080:
case 296:
case 1765:
case 1407:
case 3675:
case 2400:
case 2268:
case 246:
case 240:
case 1467:
case 2493:
case 1616:
case 3231:
case 3458:
case 2460:
case 371:
case 2272:
case 984:
case 442:
case 2249:
case 1016:
case 613:
case 2955:
case 3710:
case 2476:
case 1439:
case 3224:
case 677:
case 2421:
case 3575:
case 2681:
case 2455:
case 1731:
case 2599:
case 2976:
case 319:
case 1171:
case 2729:
case 2921:
case 175:
case 853:
case 2002:
case 585:
case 1633:
case 1694:
case 492:
case 3744:
case 3190:
case 1750:
case 346:
case 788:
case 1283:
case 966:
case 423:
case 2250:
case 1813:
case 3460:
case 2458:
case 960:
case 3208:
case 4013:
case 3493:
case 3434:
case 340:
case 1395:
case 3960:
case 3336:
case 510:
case 3578:
case 3581:
case 1874:
case 3699:
case 3662:
case 3887:
case 1772:
case 516:
case 3900:
case 2898:
case 1941:
case 2656:
case 1749:
case 835:
case 3853:
case 3128:
case 3067:
case 2615:
case 2359:
case 1109:
case 1382:
case 3861:
case 1169:
case 3854:
case 2327:
case 1840:
case 1320:
case 2541:
case 3801:
case 3752:
case 2838:
case 646:
case 3007:
case 2041:
case 1873:
case 750:
case 696:
case 429:
case 700:
case 3018:
case 1284:
case 706:
case 1712:
case 1814:
case 2291:
case 2340:
case 2820:
case 1076:
case 2039:
case 1600:
case 4027:
case 1827:
case 1791:
case 1576:
case 1021:
case 3104:
case 2373:
case 2539:
case 166:
case 2212:
case 377:
case 3164:
case 282:
case 234:
case 809:
case 671:
case 3743:
case 3015:
case 1693:
case 2882:
case 2416:
case 1402:
case 638:
case 2835:
case 2916:
case 2314:
case 1266:
case 3223:
case 1055:
case 1499:
case 1555:
case 1481:
case 86:
case 1655:
case 1270:
case 1319:
case 1145:
case 732:
case 1243:
case 2518:
case 3291:
case 127:
case 869:
case 625:
case 100:
case 1560:
case 1593:
case 1534:
case 5:
case 2994:
case 3359:
case 150:
case 3615:
case 3706:
case 1723:
case 1034:
case 1978:
case 537:
case 156:
case 3041:
case 1789:
case 1500:
case 106:
case 3541:
case 486:
case 3327:
case 2854:
case 3847:
case 3314:
case 2819:
case 2223:
case 921:
case 2125:
case 277:
case 3212:
case 2151:
case 2104:
case 2641:
case 1354:
case 3039:
case 3340:
case 1658:
case 1896:
case 3784:
case 2770:
case 1777:
case 3416:
case 1148:
case 334:
case 382:
case 2164:
case 2515:
case 1744:
case 1190:
case 2915:
case 1163:
case 4042:
case 2197:
case 1879:
case 4079:
case 2836:
case 3633:
case 3171:
case 3398:
case 1056:
case 2387:
case 1380:
case 3126:
case 1103:
case 3731:
case 1575:
case 1710:
case 3439:
case 1075:
case 2415:
case 1900:
case 563:
case 2907:
case 2418:
case 725:
case 1581:
case 3874:
case 196:
case 221:
case 4087:
case 3772:
case 1887:
case 1699:
case 2342:
case 2724:
case 2094:
case 1960:
case 288:
case 2533:
case 878:
case 1336:
case 1934:
case 2210:
case 140:
case 3229:
case 3395:
case 1208:
case 831:
case 1460:
case 2467:
case 1434:
case 2705:
case 2616:
case 977:
case 2918:
case 2765:
case 3257:
case 2407:
case 3185:
case 913:
case 1476:
case 2439:
case 1313:
case 2516:
case 849:
case 1272:
case 719:
case 2016:
case 4095:
case 1895:
case 2633:
case 3836:
case 2188:
case 2750:
case 3197:
case 1678:
case 3915:
case 3768:
case 1757:
case 3708:
case 503:
case 771:
case 2731:
case 2939:
case 1562:
case 1374:
case 1976:
case 1455:
case 553:
case 71:
case 2171:
case 1921:
case 275:
case 3616:
case 982:
case 934:
case 3467:
case 650:
case 444:
case 2395:
case 125:
case 2229:
case 606:
case 3407:
case 1675:
case 3244:
case 3765:
case 790:
case 3918:
case 1250:
case 1146:
case 2132:
case 3418:
case 3907:
case 746:
case 3533:
case 3594:
case 535:
case 3033:
case 816:
case 3822:
case 4038:
case 2320:
case 306:
case 3500:
case 4047:
case 2169:
case 3621:
case 3981:
case 3000:
case 1766:
case 2058:
case 1359:
case 284:
case 3034:
case 1706:
case 3723:
case 2382:
case 300:
case 2558:
case 3534:
case 688:
case 3478:
case 1291:
case 327:
case 621:
case 822:
case 3655:
case 3319:
case 2284:
case 3148:
case 260:
case 402:
case 479:
case 182:
case 2902:
case 134:
case 925:
case 3658:
case 2660:
case 893:
case 3361:
case 2693:
case 1882:
case 3777:
case 2347:
case 3354:
case 2827:
case 559:
case 3301:
case 2338:
case 3475:
case 1607:
case 266:
case 2791:
case 2999:
case 2021:
case 1539:
case 47:
case 411:
case 2402:
case 55:
case 2266:
case 1916:
case 1314:
case 524:
case 3712:
case 3814:
case 2478:
case 56:
case 938:
case 448:
case 1018:
case 2481:
case 1277:
case 1518:
case 2676:
case 1639:
case 1007:
case 2000:
case 837:
case 569:
case 1507:
case 3169:
case 2500:
case 1801:
case 206:
case 1752:
case 3320:
case 1186:
case 4001:
case 2593:
case 2534:
case 462:
case 1567:
case 4061:
case 1067:
case 332:
case 2060:
case 3462:
case 3499:
case 675:
case 3555:
case 1125:
case 3055:
case 734:
case 782:
case 2456:
case 1223:
case 3266:
case 990:
case 3111:
case 430:
case 2658:
case 3902:
case 1164:
case 1130:
case 360:
case 1104:
case 3576:
case 366:
case 2475:
case 3338:
case 3827:
case 2956:
case 1682:
case 2893:
case 2834:
case 4067:
case 2149:
case 198:
case 3858:
case 870:
case 1746:
case 162:
case 354:
case 1922:
case 2172:
case 2315:
case 876:
case 3573:
case 286:
case 1001:
case 1980:
case 3073:
case 3540:
case 3998:
case 2487:
case 1480:
case 329:
case 3203:
case 1818:
case 3105:
case 3498:
case 3263:
case 3290:
case 3165:
case 3514:
case 1635:
case 3027:
case 3797:
case 2673:
case 1183:
case 1300:
case 2788:
case 1647:
case 3821:
case 1285:
case 3059:
case 1360:
case 1393:
case 1334:
case 2979:
case 507:
case 4015:
case 1815:
case 2131:
case 3108:
case 2096:
case 264:
case 2726:
case 520:
case 891:
case 2479:
case 1436:
case 2442:
case 3117:
case 668:
case 3995:
case 3855:
case 526:
case 752:
case 2318:
case 762:
case 2203:
case 229:
case 1355:
case 3785:
case 2165:
case 2514:
case 608:
case 1913:
case 2263:
case 1297:
case 3172:
case 380:
case 567:
case 3659:
case 3860:
case 2696:
case 2858:
case 3149:
case 839:
case 3893:
case 2998:
case 3627:
case 1841:
case 818:
case 1321:
case 2073:
case 1538:
case 1547:
case 1974:
case 1376:
case 1038:
case 2573:
case 748:
case 1047:
case 3987:
case 1535:
case 2117:
case 1110:
case 58:
case 994:
case 3614:
case 736:
case 1035:
case 3479:
case 3246:
case 111:
case 2855:
case 17:
case 3307:
case 2527:
case 3640:
case 2341:
case 589:
case 2821:
case 3788:
case 3673:
case 2168:
case 2797:
case 3150:
case 364:
case 3726:
case 3096:
case 2108:
case 2495:
case 3942:
case 152:
case 3596:
case 315:
case 1661:
case 3367:
case 944:
case 1582:
case 179:
case 1143:
case 1687:
case 3381:
case 1899:
case 2680:
case 805:
case 1170:
case 855:
case 2177:
case 3536:
case 268:
case 292:
case 1802:
case 117:
case 4002:
case 2622:
case 1704:
case 3378:
case 3191:
case 2482:
case 2816:
case 664:
case 3613:
case 1459:
case 2935:
case 1595:
case 2286:
case 3919:
case 2420:
case 3833:
case 3894:
case 1679:
case 1414:
case 2636:
case 3792:
case 2189:
case 2302:
case 3522:
case 911:
case 2123:
case 3580:
case 2399:
case 1728:
case 2362:
case 2574:
case 3954:
case 3356:
case 3709:
case 1940:
case 1598:
case 223:
case 1473:
case 3454:
case 2204:
case 561:
case 1440:
case 2438:
case 3112:
case 3375:
case 2264:
case 952:
case 2745:
case 1248:
case 425:
case 1914:
case 979:
case 998:
case 3935:
case 2613:
case 3816:
case 962:
case 3228:
case 551:
case 1875:
case 3420:
case 4075:
case 501:
case 2711:
case 2919:
case 1269:
case 847:
case 1856:
case 1184:
case 3737:
case 2674:
case 2419:
case 3680:
case 897:
case 2381:
case 1079:
case 3435:
case 2191:
case 2036:
case 948:
case 1542:
case 1996:
case 1333:
case 1579:
case 2536:
case 3251:
case 2112:
case 446:
case 3204:
case 2454:
case 323:
case 3230:
case 654:
case 2461:
case 3513:
case 3745:
case 930:
case 1166:
case 3189:
case 4078:
case 2792:
case 490:
case 2894:
case 2833:
case 1211:
case 2080:
case 629:
case 2709:
case 2901:
case 744:
case 2356:
case 2954:
case 3399:
case 814:
case 1881:
case 2580:
case 3123:
case 1106:
case 1053:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756227601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,];
var gg_b = "1756227601/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
