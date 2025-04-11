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
var o = 0;
switch (g) {
case 451:
case 25:
case 1602:
case 2997:
case 3796:
case 906:
case 2849:
case 2074:
case 2758:
case 2649:
case 3662:
case 3862:
case 892:
case 3077:
case 2911:
case 514:
case 2339:
case 1978:
case 3191:
case 3020:
case 1084:
case 3902:
case 3510:
case 1368:
case 3569:
case 1141:
case 3119:
case 3256:
case 3334:
case 1507:
case 2847:
case 2480:
case 2647:
case 3443:
case 2298:
case 360:
case 2923:
case 396:
case 2740:
case 2564:
case 2287:
case 1785:
case 337:
case 3783:
case 1454:
case 912:
case 736:
case 3655:
case 3133:
case 1746:
case 1470:
case 1135:
case 797:
case 1100:
case 1853:
case 3284:
case 3712:
case 831:
case 2825:
case 1277:
case 3644:
case 2701:
case 2775:
case 3844:
case 2337:
case 190:
case 2625:
case 3079:
case 3259:
case 2928:
case 74:
case 261:
case 46:
case 2479:
case 1749:
case 1514:
case 469:
case 749:
case 580:
case 2322:
case 1858:
case 3080:
case 62:
case 489:
case 2702:
case 119:
case 875:
case 2318:
case 3873:
case 2541:
case 2107:
case 675:
case 1305:
case 2270:
case 3799:
case 2846:
case 1506:
case 2753:
case 2420:
case 2231:
case 276:
case 1487:
case 1276:
case 3861:
case 3661:
case 2535:
case 3224:
case 1747:
case 1973:
case 785:
case 3975:
case 1498:
case 3566:
case 3192:
case 918:
case 3365:
case 445:
case 3474:
case 93:
case 303:
case 1315:
case 3313:
case 1516:
case 35:
case 3542:
case 2678:
case 3758:
case 3849:
case 4063:
case 1811:
case 3074:
case 3988:
case 2862:
case 1888:
case 3339:
case 1949:
case 3911:
case 1790:
case 2662:
case 2495:
case 2569:
case 878:
case 4071:
case 2994:
case 2191:
case 2020:
case 359:
case 993:
case 1274:
case 3647:
case 3923:
case 1032:
case 678:
case 695:
case 154:
case 280:
case 3847:
case 3480:
case 237:
case 644:
case 3999:
case 3106:
case 3226:
case 3476:
case 296:
case 3740:
case 3564:
case 1761:
case 2712:
case 1457:
case 1899:
case 724:
case 3048:
case 2655:
case 1947:
case 1773:
case 138:
case 2844:
case 70:
case 3775:
case 581:
case 561:
case 1823:
case 753:
case 613:
case 1166:
case 1592:
case 788:
case 1070:
case 1295:
case 3928:
case 2448:
case 3293:
case 1031:
case 381:
case 1086:
case 1762:
case 3229:
case 1027:
case 2890:
case 361:
case 1696:
case 2711:
case 1896:
case 867:
case 3322:
case 1778:
case 1591:
case 1828:
case 1169:
case 1054:
case 214:
case 1744:
case 1560:
case 3227:
case 3107:
case 2450:
case 630:
case 1029:
case 3646:
case 450:
case 1755:
case 3753:
case 1484:
case 1812:
case 376:
case 687:
case 2940:
case 3420:
case 4068:
case 3270:
case 1093:
case 559:
case 2799:
case 3983:
case 3885:
case 503:
case 243:
case 3912:
case 132:
case 777:
case 3685:
case 2861:
case 1683:
case 2192:
case 1243:
case 4072:
case 3381:
case 2224:
case 2901:
case 1114:
case 271:
case 649:
case 2429:
case 3790:
case 3248:
case 4003:
case 1382:
case 3897:
case 2084:
case 3459:
case 159:
case 103:
case 1313:
case 2894:
case 3516:
case 2694:
case 1289:
case 865:
case 2802:
case 532:
case 64:
case 1758:
case 2056:
case 479:
case 3611:
case 1849:
case 1232:
case 4065:
case 2853:
case 3699:
case 286:
case 3457:
case 2470:
case 3899:
case 2653:
case 1048:
case 963:
case 1337:
case 3504:
case 3947:
case 1701:
case 2427:
case 685:
case 3250:
case 983:
case 1647:
case 1923:
case 3925:
case 1298:
case 591:
case 2141:
case 2944:
case 1480:
case 3424:
case 775:
case 1999:
case 849:
case 1476:
case 1740:
case 1287:
case 1564:
case 323:
case 2955:
case 3696:
case 2024:
case 3896:
case 2749:
case 2658:
case 391:
case 554:
case 3778:
case 3591:
case 1794:
case 407:
case 1702:
case 3169:
case 411:
case 2057:
case 3295:
case 3031:
case 1109:
case 836:
case 1229:
case 4051:
case 538:
case 161:
case 1479:
case 731:
case 1336:
case 3946:
case 952:
case 1885:
case 2426:
case 3883:
case 3533:
case 2487:
case 1912:
case 332:
case 1685:
case 901:
case 2498:
case 370:
case 1381:
case 3456:
case 2973:
case 2875:
case 1318:
case 3744:
case 2725:
case 1477:
case 2675:
case 917:
case 1753:
case 2330:
case 3812:
case 2305:
case 3093:
case 2506:
case 1983:
case 3279:
case 2790:
case 2888:
case 371:
case 1077:
case 2538:
case 1994:
case 1020:
case 1191:
case 2459:
case 2697:
case 1728:
case 3802:
case 4036:
case 3602:
case 2087:
case 2516:
case 3894:
case 1117:
case 862:
case 2611:
case 535:
case 877:
case 1133:
case 682:
case 3470:
case 1855:
case 662:
case 3431:
case 3220:
case 386:
case 1712:
case 51:
case 2592:
case 3486:
case 2823:
case 3277:
case 1644:
case 3427:
case 238:
case 2773:
case 390:
case 2623:
case 3141:
case 180:
case 1119:
case 2424:
case 3944:
case 160:
case 196:
case 2761:
case 3955:
case 223:
case 767:
case 3785:
case 137:
case 519:
case 772:
case 3749:
case 3514:
case 1138:
case 291:
case 2045:
case 3658:
case 3990:
case 3024:
case 2696:
case 2828:
case 2169:
case 3489:
case 1352:
case 319:
case 2031:
case 1259:
case 868:
case 566:
case 4021:
case 853:
case 586:
case 1448:
case 3142:
case 2295:
case 499:
case 1958:
case 1890:
case 590:
case 1788:
case 2086:
case 2517:
case 232:
case 143:
case 3840:
case 4013:
case 1861:
case 433:
case 3276:
case 2946:
case 2533:
case 624:
case 1104:
case 3280:
case 668:
case 1975:
case 3498:
case 653:
case 335:
case 1192:
case 1723:
case 3725:
case 1450:
case 778:
case 3675:
case 3601:
case 2744:
case 1873:
case 3875:
case 795:
case 571:
case 2560:
case 2093:
case 2612:
case 4082:
case 1799:
case 464:
case 2985:
case 2755:
case 484:
case 3059:
case 3164:
case 1940:
case 714:
case 3375:
case 3737:
case 178:
case 1373:
case 3576:
case 2981:
case 1803:
case 1266:
case 1150:
case 3805:
case 2936:
case 1014:
case 3580:
case 3340:
case 1930:
case 458:
case 483:
case 2260:
case 2156:
case 2383:
case 277:
case 1492:
case 262:
case 3663:
case 2467:
case 365:
case 385:
case 3863:
case 638:
case 1865:
case 3206:
case 3952:
case 3214:
case 3066:
case 1390:
case 2000:
case 3442:
case 2035:
case 1148:
case 2922:
case 3739:
case 4025:
case 823:
case 2396:
case 1006:
case 2410:
case 1559:
case 349:
case 4047:
case 2217:
case 854:
case 3713:
case 1852:
case 3520:
case 1584:
case 1834:
case 2937:
case 440:
case 3951:
case 2765:
case 549:
case 172:
case 2124:
case 2204:
case 2921:
case 167:
case 1419:
case 737:
case 2292:
case 187:
case 3736:
case 1143:
case 796:
case 3577:
case 2399:
case 3186:
case 2466:
case 1556:
case 3170:
case 2042:
case 3435:
case 2323:
case 670:
case 268:
case 20:
case 1344:
case 54:
case 3718:
case 3131:
case 3400:
case 1968:
case 2982:
case 4085:
case 2238:
case 2752:
case 2548:
case 2939:
case 565:
case 3722:
case 832:
case 1972:
case 2064:
case 1491:
case 2388:
case 3908:
case 3193:
case 2397:
case 1007:
case 1200:
case 1120:
case 2464:
case 3184:
case 2375:
case 947:
case 2965:
case 922:
case 1554:
case 3233:
case 1618:
case 4062:
case 192:
case 871:
case 776:
case 1545:
case 3543:
case 1177:
case 3936:
case 1346:
case 377:
case 686:
case 1385:
case 1017:
case 1586:
case 2198:
case 362:
case 3260:
case 4078:
case 1570:
case 2126:
case 1681:
case 2863:
case 1881:
case 2663:
case 3734:
case 2214:
case 1768:
case 2066:
case 2782:
case 1409:
case 524:
case 1179:
case 761:
case 2442:
case 3035:
case 588:
case 3291:
case 866:
case 1622:
case 2358:
case 249:
case 671:
case 400:
case 3396:
case 2189:
case 3595:
case 1822:
case 3410:
case 509:
case 1593:
case 1019:
case 2132:
case 3217:
case 2069:
case 819:
case 1763:
case 2010:
case 3765:
case 2781:
case 2520:
case 964:
case 1347:
case 198:
case 2736:
case 1038:
case 928:
case 2145:
case 2577:
case 3204:
case 2441:
case 236:
case 3703:
case 3574:
case 3466:
case 1598:
case 297:
case 3399:
case 1016:
case 2934:
case 2400:
case 2131:
case 2435:
case 30:
case 1526:
case 933:
case 1637:
case 2579:
case 1813:
case 4061:
case 3815:
case 1004:
case 3752:
case 2394:
case 999:
case 3982:
case 3238:
case 582:
case 3615:
case 2067:
case 2872:
case 129:
case 1349:
case 3939:
case 2672:
case 3548:
case 2722:
case 3388:
case 1589:
case 1242:
case 2908:
case 1839:
case 1639:
case 4073:
case 3216:
case 2129:
case 1414:
case 2868:
case 1682:
case 2668:
case 3913:
case 99:
case 1915:
case 104:
case 2174:
case 162:
case 916:
case 2492:
case 732:
case 182:
case 4094:
case 1156:
case 2404:
case 3636:
case 3527:
case 3570:
case 3681:
case 2865:
case 770:
case 412:
case 3881:
case 420:
case 1734:
case 1467:
case 3531:
case 278:
case 1184:
case 1981:
case 52:
case 457:
case 1751:
case 2963:
case 295:
case 3235:
case 3407:
case 392:
case 637:
case 1312:
case 2266:
case 2150:
case 696:
case 2014:
case 3177:
case 3622:
case 791:
case 2006:
case 1469:
case 3593:
case 1410:
case 2715:
case 2852:
case 1328:
case 3529:
case 3768:
case 406:
case 3179:
case 1922:
case 331:
case 951:
case 2416:
case 1000:
case 1291:
case 2390:
case 2355:
case 124:
case 945:
case 3730:
case 2556:
case 1574:
case 1703:
case 3705:
case 643:
case 3621:
case 3587:
case 2651:
case 2433:
case 1323:
case 1157:
case 3526:
case 10:
case 168:
case 614:
case 2584:
case 109:
case 3176:
case 723:
case 2143:
case 1550:
case 287:
case 2460:
case 1124:
case 3180:
case 473:
case 267:
case 1921:
case 2419:
case 3589:
case 2362:
case 32:
case 2195:
case 3639:
case 1216:
case 4001:
case 3414:
case 2007:
case 969:
case 1397:
case 3682:
case 1913:
case 304:
case 3915:
case 1815:
case 4040:
case 1982:
case 96:
case 329:
case 1548:
case 2210:
case 1939:
case 2808:
case 2269:
case 843:
case 3930:
case 1340:
case 2241:
case 2636:
case 3361:
case 3404:
case 2385:
case 3174:
case 2017:
case 415:
case 3905:
case 2881:
case 3665:
case 735:
case 165:
case 85:
case 2570:
case 3557:
case 3865:
case 1126:
case 2681:
case 2554:
case 395:
case 1301:
case 378:
case 2818:
case 2120:
case 1737:
case 1576:
case 1805:
case 3266:
case 2177:
case 2346:
case 3524:
case 493:
case 1721:
case 3603:
case 292:
case 1189:
case 530:
case 1358:
case 3559:
case 2772:
case 1132:
case 3652:
case 719:
case 572:
case 3715:
case 2019:
case 587:
case 2179:
case 65:
case 71:
case 905:
case 1214:
case 603:
case 1066:
case 2768:
case 2409:
case 3390:
case 43:
case 2033:
case 3148:
case 4023:
case 14:
case 861:
case 2621:
case 1186:
case 2598:
case 197:
case 3009:
case 446:
case 3556:
case 766:
case 790:
case 3433:
case 2637:
case 942:
case 2016:
case 1934:
case 3344:
case 3651:
case 1781:
case 3584:
case 330:
case 2347:
case 3834:
case 275:
case 950:
case 1010:
case 2180:
case 387:
case 3143:
case 4028:
case 3491:
case 421:
case 876:
case 2589:
case 578:
case 1193:
case 4012:
case 2682:
case 204:
case 2915:
case 2414:
case 2092:
case 1302:
case 2613:
case 2813:
case 1579:
case 2004:
case 2349:
case 661:
case 1672:
case 3210:
case 1722:
case 3608:
case 1067:
case 3571:
case 1503:
case 500:
case 1774:
case 628:
case 1624:
case 3306:
case 3447:
case 1824:
case 2756:
case 1058:
case 240:
case 2283:
case 3240:
case 664:
case 3876:
case 118:
case 1976:
case 2784:
case 935:
case 2212:
case 2455:
case 1857:
case 3563:
case 2954:
case 3090:
case 3275:
case 252:
case 2444:
case 748:
case 2945:
case 1423:
case 3061:
case 1040:
case 3959:
case 2228:
case 3789:
case 2085:
case 3258:
case 91:
case 705:
case 833:
case 3732:
case 2929:
case 919:
case 1488:
case 2462:
case 3073:
case 3314:
case 1748:
case 526:
case 3139:
case 1659:
case 1859:
case 1244:
case 3677:
case 3956:
case 3727:
case 2650:
case 2103:
case 3877:
case 3786:
case 647:
case 3820:
case 3731:
case 1534:
case 3446:
case 3770:
case 750:
case 610:
case 263:
case 3754:
case 2392:
case 1002:
case 3485:
case 2165:
case 1483:
case 462:
case 2461:
case 283:
case 1920:
case 727:
case 2874:
case 1743:
case 3136:
case 1977:
case 1656:
case 3745:
case 2049:
case 986:
case 2724:
case 120:
case 2848:
case 3309:
case 1508:
case 2989:
case 2759:
case 1053:
case 3055:
case 2648:
case 3572:
case 4035:
case 1262:
case 341:
case 2932:
case 2025:
case 3879:
case 2490:
case 2515:
case 2047:
case 2152:
case 300:
case 2211:
case 971:
case 4041:
case 2880:
case 2447:
case 3643:
case 2530:
case 340:
case 3756:
case 4069:
case 317:
case 2306:
case 4010:
case 1096:
case 3931:
case 3319:
case 2240:
case 2787:
case 1654:
case 3360:
case 3134:
case 2876:
case 2957:
case 3283:
case 2676:
case 1285:
case 2726:
case 3970:
case 1631:
case 3151:
case 1870:
case 255:
case 970:
case 497:
case 1246:
case 1581:
case 1720:
case 1831:
case 436:
case 3212:
case 1453:
case 932:
case 1627:
case 716:
case 656:
case 3333:
case 1943:
case 1777:
case 1886:
case 301:
case 1335:
case 2201:
case 352:
case 2090:
case 1686:
case 2121:
case 3993:
case 1402:
case 1995:
case 3228:
case 1083:
case 558:
case 2061:
case 1494:
case 611:
case 2732:
case 3296:
case 3929:
case 1779:
case 3391:
case 1829:
case 121:
case 2182:
case 1693:
case 3695:
case 991:
case 3046:
case 1893:
case 2139:
case 534:
case 3850:
case 1171:
case 2062:
case 2786:
case 1088:
case 1974:
case 923:
case 2956:
case 2677:
case 625:
case 3473:
case 1364:
case 1130:
case 2727:
case 2770:
case 954:
case 2446:
case 3299:
case 2118:
case 2820:
case 334:
case 193:
case 2253:
case 1097:
case 1537:
case 3304:
case 358:
case 2078:
case 1887:
case 879:
case 794:
case 938:
case 1687:
case 363:
case 3392:
case 2754:
case 3165:
case 1826:
case 1163:
case 1521:
case 1698:
case 1780:
case 3724:
case 465:
case 1247:
case 2745:
case 3874:
case 2136:
case 1011:
case 1950:
case 3049:
case 3759:
case 3848:
case 2309:
case 1099:
case 2793:
case 3989:
case 3515:
case 2879:
case 3490:
case 501:
case 1513:
case 78:
case 3316:
case 76:
case 3288:
case 13:
case 3025:
case 241:
case 3932:
case 44:
case 552:
case 1023:
case 540:
case 3211:
case 1249:
case 1832:
case 200:
case 3152:
case 67:
case 1458:
case 1632:
case 139:
case 517:
case 1948:
case 2366:
case 642:
case 2499:
case 3870:
case 2565:
case 627:
case 3670:
case 3777:
case 3943:
case 1333:
case 1945:
case 2423:
case 2273:
case 3827:
case 1444:
case 53:
case 2824:
case 140:
case 1643:
case 2058:
case 3645:
case 3845:
case 117:
case 1986:
case 2624:
case 3096:
case 976:
case 3341:
case 5:
case 1319:
case 1360:
case 1134:
case 1283:
case 1970:
case 3028:
case 722:
case 1391:
case 2290:
case 3829:
case 321:
case 1462:
case 3168:
case 850:
case 4007:
case 3012:
case 2748:
case 593:
case 3522:
case 3402:
case 1108:
case 3995:
case 1085:
case 2040:
case 2411:
case 827:
case 158:
case 805:
case 3626:
case 1304:
case 2094:
case 3887:
case 183:
case 2002:
case 2551:
case 733:
case 163:
case 3826:
case 674:
case 3780:
case 3698:
case 3521:
case 2367:
case 212:
case 2856:
case 413:
case 3247:
case 1674:
case 1874:
case 3898:
case 1049:
case 3225:
case 1850:
case 1998:
case 1223:
case 3088:
case 3974:
case 478:
case 2244:
case 3364:
case 1473:
case 3475:
case 3130:
case 784:
case 2684:
case 1987:
case 134:
case 2412:
case 2534:
case 4006:
case 2310:
case 3832:
case 3249:
case 3582:
case 79:
case 1152:
case 339:
case 3632:
case 3458:
case 2979:
case 3889:
case 3948:
case 3539:
case 2428:
case 3689:
case 206:
case 1297:
case 1759:
case 2508:
case 3099:
case 546:
case 1989:
case 605:
case 1515:
case 3513:
case 1490:
case 1316:
case 2262:
case 33:
case 799:
case 3342:
case 2720:
case 2581:
case 3976:
case 318:
case 3657:
case 2831:
case 808:
case 86:
case 3499:
case 2870:
case 2631:
case 3366:
case 3565:
case 2246:
case 3857:
case 1275:
case 3273:
case 2300:
case 645:
case 3980:
case 3750:
case 943:
case 2627:
case 2335:
case 1571:
case 3774:
case 1306:
case 1880:
case 1447:
case 498:
case 725:
case 1530:
case 914:
case 2854:
case 4038:
case 1957:
case 2028:
case 1240:
case 2341:
case 869:
case 3261:
case 1787:
case 221:
case 2168:
case 1182:
case 3748:
case 1314:
case 1139:
case 2012:
case 2693:
case 3859:
case 3497:
case 2494:
case 845:
case 3040:
case 2172:
case 4004:
case 1959:
case 1789:
case 2402:
case 2083:
case 1258:
case 3115:
case 68:
case 429:
case 779:
case 66:
case 1732:
case 1449:
case 3411:
case 2687:
case 2163:
case 1485:
case 3483:
case 3094:
case 2626:
case 1181:
case 2537:
case 1984:
case 2887:
case 2776:
case 3920:
case 3977:
case 3743:
case 1136:
case 756:
case 1745:
case 320:
case 2698:
case 2780:
case 2247:
case 851:
case 1677:
case 3244:
case 2105:
case 2225:
case 996:
case 2171:
case 2974:
case 1062:
case 293:
case 2097:
case 1731:
case 960:
case 492:
case 980:
case 1620:
case 2458:
case 100:
case 2832:
case 2249:
case 3496:
case 1568:
case 707:
case 4019:
case 573:
case 2:
case 3428:
case 2539:
case 1122:
case 1202:
case 2948:
case 3508:
case 1309:
case 518:
case 3795:
case 306:
case 651:
case 1055:
case 431:
case 4033:
case 2342:
case 1679:
case 2023:
case 2938:
case 2714:
case 2549:
case 2282:
case 1969:
case 481:
case 846:
case 2842:
case 741:
case 2642:
case 1594:
case 26:
case 208:
case 461:
case 1034:
case 621:
case 3610:
case 1272:
case 1422:
case 700:
case 3196:
case 3717:
case 3909:
case 987:
case 2864:
case 1418:
case 1967:
case 3112:
case 2664:
case 3251:
case 1735:
case 1146:
case 967:
case 1320:
case 2430:
case 350:
case 2221:
case 1807:
case 2904:
case 2547:
case 476:
case 930:
case 1607:
case 726:
case 2405:
case 2992:
case 2525:
case 2326:
case 1436:
case 3544:
case 3719:
case 1741:
case 2387:
case 2015:
case 3183:
case 3667:
case 2398:
case 505:
case 3234:
case 156:
case 403:
case 202:
case 3590:
case 3415:
case 542:
case 3111:
case 251:
case 1149:
case 2991:
case 815:
case 179:
case 63:
case 2194:
case 3063:
case 2102:
case 4074:
case 17:
case 1742:
case 4050:
case 3716:
case 3188:
case 2468:
case 1814:
case 2917:
case 550:
case 1003:
case 1558:
case 6:
case 1614:
case 2345:
case 944:
case 1263:
case 3324:
case 1380:
case 8:
case 978:
case 3792:
case 2354:
case 839:
case 1966:
case 2841:
case 1575:
case 1501:
case 3573:
case 995:
case 1376:
case 1147:
case 2960:
case 374:
case 1230:
case 1421:
case 2919:
case 1271:
case 3866:
case 1205:
case 3203:
case 4048:
case 913:
case 2218:
case 1540:
case 2800:
case 3561:
case 2327:
case 216:
case 2585:
case 2835:
case 3199:
case 1021:
case 3714:
case 3549:
case 1348:
case 3938:
case 929:
case 3642:
case 308:
case 1037:
case 1616:
case 516:
case 3842:
case 3332:
case 369:
case 2208:
case 2128:
case 2810:
case 19:
case 2869:
case 3916:
case 2669:
case 1597:
case 4080:
case 1588:
case 2717:
case 1838:
case 3158:
case 1215:
case 1638:
case 2251:
case 1350:
case 3664:
case 3237:
case 128:
case 414:
case 3864:
case 1766:
case 998:
case 1403:
case 3471:
case 2384:
case 3175:
case 250:
case 3221:
case 1173:
case 3904:
case 1804:
case 2907:
case 2719:
case 3015:
case 394:
case 1692:
case 242:
case 551:
case 1523:
case 618:
case 3326:
case 1161:
case 2356:
case 3463:
case 1374:
case 2183:
case 1599:
case 2111:
case 931:
case 2252:
case 302:
case 2063:
case 1769:
case 3472:
case 1081:
case 2716:
case 1018:
case 1691:
case 1528:
case 2359:
case 4020:
case 3917:
case 3468:
case 1596:
case 1162:
case 1395:
case 2071:
case 3393:
case 2005:
case 1434:
case 480:
case 2324:
case 1935:
case 460:
case 2265:
case 2704:
case 1860:
case 2792:
case 1660:
case 1619:
case 3641:
case 2123:
case 2357:
case 3960:
case 274:
case 3919:
case 508:
case 3585:
case 2906:
case 1833:
case 752:
case 806:
case 1633:
case 4079:
case 248:
case 316:
case 39:
case 189:
case 2272:
case 4024:
case 1389:
case 3588:
case 522:
case 1158:
case 3452:
case 7:
case 3638:
case 1213:
case 419:
case 3190:
case 3511:
case 41:
case 211:
case 4057:
case 1938:
case 3348:
case 2268:
case 1282:
case 399:
case 2379:
case 855:
case 3037:
case 16:
case 2594:
case 18:
case 3616:
case 2910:
case 2051:
case 2502:
case 1842:
case 2741:
case 1387:
case 194:
case 3692:
case 333:
case 1015:
case 2436:
case 2553:
case 3964:
case 256:
case 2481:
case 924:
case 3374:
case 435:
case 145:
case 1398:
case 3039:
case 2735:
case 2700:
case 328:
case 1864:
case 2967:
case 909:
case 3766:
case 1471:
case 793:
case 1221:
case 1101:
case 3173:
case 2807:
case 1547:
case 3018:
case 721:
case 2439:
case 3528:
case 600:
case 3691:
case 826:
case 1329:
case 471:
case 2814:
case 2482:
case 1917:
case 3596:
case 584:
case 3395:
case 2149:
case 3710:
case 3769:
case 3408:
case 1102:
case 1222:
case 641:
case 279:
case 1370:
case 2271:
case 2205:
case 746:
case 3144:
case 841:
case 2230:
case 1707:
case 982:
case 3451:
case 1386:
case 599:
case 1600:
case 1153:
case 2540:
case 1218:
case 3155:
case 2437:
case 490:
case 3767:
case 3434:
case 2380:
case 2606:
case 3512:
case 3900:
case 2806:
case 3819:
case 2575:
case 310:
case 1841:
case 2501:
case 3619:
case 2966:
case 1669:
case 2597:
case 3034:
case 1610:
case 1208:
case 1128:
case 491:
case 2638:
case 817:
case 840:
case 1562:
case 1196:
case 2838:
case 1717:
case 307:
case 2348:
case 2511:
case 4070:
case 706:
case 4031:
case 3609:
case 2190:
case 3502:
case 1578:
case 2037:
case 127:
case 1544:
case 1907:
case 142:
case 1183:
case 579:
case 3185:
case 2374:
case 2599:
case 3008:
case 2964:
case 1356:
case 3481:
case 997:
case 3967:
case 57:
case 617:
case 4029:
case 3377:
case 1384:
case 150:
case 3807:
case 4093:
case 2403:
case 3439:
case 3742:
case 834:
case 1197:
case 1716:
case 1188:
case 949:
case 3814:
case 3003:
case 3558:
case 1030:
case 1590:
case 4026:
case 1738:
case 2817:
case 2081:
case 2710:
case 883:
case 1063:
case 105:
case 985:
case 1666:
case 663:
case 511:
case 3230:
case 3271:
case 683:
case 1203:
case 965:
case 1357:
case 3540:
case 2633:
case 438:
case 3764:
case 2451:
case 2343:
case 2935:
case 3806:
case 3606:
case 3380:
case 2434:
case 2660:
case 1792:
case 773:
case 3966:
case 4089:
case 634:
case 3052:
case 222:
case 3575:
case 2819:
case 1573:
case 507:
case 1704:
case 2860:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744344002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,];
var gg_b = "1744344002/";

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
