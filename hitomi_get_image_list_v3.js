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
case 677:
case 320:
case 199:
case 554:
case 499:
case 3832:
case 3115:
case 1681:
case 363:
case 97:
case 3736:
case 1367:
case 1421:
case 2344:
case 2597:
case 1459:
case 2733:
case 1630:
case 3099:
case 3030:
case 1019:
case 2231:
case 3705:
case 2984:
case 1699:
case 1910:
case 3939:
case 783:
case 2898:
case 4019:
case 2601:
case 103:
case 3668:
case 391:
case 1336:
case 3767:
case 3571:
case 2529:
case 1239:
case 3315:
case 895:
case 3795:
case 121:
case 3914:
case 87:
case 1077:
case 666:
case 2144:
case 48:
case 3861:
case 1643:
case 1888:
case 2565:
case 1994:
case 3204:
case 2657:
case 329:
case 3677:
case 1136:
case 2046:
case 1290:
case 2366:
case 272:
case 2884:
case 206:
case 3:
case 1435:
case 381:
case 3612:
case 32:
case 3623:
case 1261:
case 2486:
case 1452:
case 970:
case 315:
case 1763:
case 2320:
case 4012:
case 3288:
case 3932:
case 674:
case 189:
case 1023:
case 879:
case 508:
case 1012:
case 1148:
case 2038:
case 911:
case 3354:
case 3890:
case 985:
case 1602:
case 586:
case 628:
case 1255:
case 1988:
case 3073:
case 3748:
case 2218:
case 335:
case 2076:
case 3441:
case 700:
case 3163:
case 1535:
case 3056:
case 175:
case 1656:
case 2682:
case 2724:
case 3416:
case 2908:
case 475:
case 547:
case 4047:
case 3961:
case 3154:
case 3750:
case 2174:
case 1673:
case 3814:
case 3002:
case 2137:
case 931:
case 966:
case 2423:
case 494:
case 3824:
case 3003:
case 1564:
case 2995:
case 378:
case 1672:
case 3686:
case 877:
case 2006:
case 2714:
case 3049:
case 1184:
case 2683:
case 3940:
case 758:
case 2394:
case 3162:
case 2978:
case 540:
case 446:
case 3285:
case 1649:
case 3380:
case 2228:
case 1233:
case 438:
case 4086:
case 219:
case 2104:
case 2700:
case 1145:
case 1603:
case 695:
case 762:
case 1258:
case 912:
case 1464:
case 2641:
case 748:
case 1538:
case 2447:
case 1693:
case 2194:
case 977:
case 3526:
case 3933:
case 866:
case 1866:
case 67:
case 4022:
case 4013:
case 1453:
case 456:
case 324:
case 382:
case 156:
case 3362:
case 2739:
case 3613:
case 3093:
case 3482:
case 239:
case 118:
case 1476:
case 1345:
case 1240:
case 2967:
case 2096:
case 565:
case 3118:
case 4065:
case 2878:
case 1725:
case 2263:
case 2419:
case 2948:
case 3858:
case 1546:
case 1175:
case 3042:
case 243:
case 3591:
case 3266:
case 184:
case 3274:
case 2254:
case 874:
case 2468:
case 3924:
case 631:
case 497:
case 122:
case 484:
case 2761:
case 3840:
case 3589:
case 54:
case 3970:
case 2087:
case 704:
case 3401:
case 2021:
case 3079:
case 3220:
case 1937:
case 392:
case 3798:
case 670:
case 1974:
case 3318:
case 327:
case 3697:
case 1769:
case 1051:
case 1446:
case 1029:
case 1375:
case 611:
case 3369:
case 2732:
case 513:
case 3775:
case 1885:
case 2755:
case 1411:
case 1617:
case 1398:
case 1097:
case 3501:
case 3125:
case 55:
case 3489:
case 2319:
case 1913:
case 24:
case 926:
case 3286:
case 2799:
case 1897:
case 3518:
case 3191:
case 1146:
case 2036:
case 2283:
case 4085:
case 2727:
case 1851:
case 2781:
case 2628:
case 1249:
case 2368:
case 2996:
case 1598:
case 3817:
case 1633:
case 2134:
case 3301:
case 53:
case 4044:
case 2887:
case 784:
case 2859:
case 1789:
case 3879:
case 797:
case 2821:
case 25:
case 3040:
case 1658:
case 3903:
case 1293:
case 1475:
case 404:
case 213:
case 1508:
case 2615:
case 826:
case 3842:
case 364:
case 1311:
case 3972:
case 1807:
case 3746:
case 3469:
case 3213:
case 1640:
case 2078:
case 3357:
case 2743:
case 3058:
case 2377:
case 525:
case 3525:
case 1865:
case 2588:
case 2334:
case 1498:
case 2896:
case 1279:
case 1020:
case 2312:
case 942:
case 4074:
case 1338:
case 302:
case 1584:
case 240:
case 3893:
case 2147:
case 1037:
case 3666:
case 852:
case 4037:
case 3917:
case 1074:
case 2510:
case 3480:
case 1153:
case 1066:
case 3207:
case 1822:
case 162:
case 1813:
case 530:
case 3637:
case 1726:
case 259:
case 3431:
case 148:
case 3182:
case 2504:
case 3360:
case 3265:
case 448:
case 2835:
case 1624:
case 746:
case 1364:
case 2756:
case 1782:
case 367:
case 571:
case 265:
case 3776:
case 1886:
case 2410:
case 3126:
case 842:
case 1670:
case 250:
case 2773:
case 2347:
case 738:
case 510:
case 116:
case 3070:
case 3462:
case 3979:
case 1353:
case 787:
case 2806:
case 2921:
case 3849:
case 2987:
case 2702:
case 2959:
case 3160:
case 1217:
case 3382:
case 3803:
case 158:
case 2749:
case 3014:
case 775:
case 1550:
case 1847:
case 3706:
case 1934:
case 1227:
case 1281:
case 2466:
case 1600:
case 257:
case 2386:
case 1352:
case 1335:
case 1230:
case 805:
case 3141:
case 1299:
case 780:
case 2876:
case 3856:
case 3735:
case 517:
case 841:
case 3000:
case 3116:
case 2853:
case 3943:
case 400:
case 2680:
case 1783:
case 1614:
case 2113:
case 2437:
case 1548:
case 951:
case 2566:
case 1639:
case 905:
case 2838:
case 626:
case 1716:
case 1135:
case 3341:
case 1004:
case 588:
case 1243:
case 4004:
case 461:
case 1968:
case 409:
case 3234:
case 1741:
case 537:
case 193:
case 493:
case 369:
case 3277:
case 2257:
case 3604:
case 2289:
case 4010:
case 2662:
case 941:
case 286:
case 2084:
case 1919:
case 3930:
case 1690:
case 1106:
case 3039:
case 1010:
case 3515:
case 514:
case 1467:
case 2846:
case 2742:
case 790:
case 4088:
case 3212:
case 36:
case 1578:
case 973:
case 652:
case 2444:
case 1387:
case 3973:
case 1359:
case 1405:
case 1661:
case 3843:
case 1321:
case 2365:
case 1834:
case 40:
case 2625:
case 10:
case 1947:
case 3721:
case 1877:
case 3787:
case 2151:
case 78:
case 721:
case 2964:
case 2129:
case 1595:
case 1655:
case 483:
case 1771:
case 183:
case 1632:
case 534:
case 873:
case 1567:
case 3827:
case 2098:
case 2618:
case 1505:
case 2544:
case 1121:
case 2717:
case 296:
case 1256:
case 2282:
case 3899:
case 799:
case 2165:
case 3032:
case 2585:
case 1868:
case 2107:
case 1923:
case 598:
case 2329:
case 3371:
case 2669:
case 1096:
case 1967:
case 171:
case 82:
case 1616:
case 139:
case 471:
case 2476:
case 2345:
case 2240:
case 815:
case 740:
case 218:
case 2837:
case 1905:
case 3473:
case 3854:
case 2944:
case 2453:
case 2866:
case 3339:
case 2013:
case 2384:
case 516:
case 759:
case 1194:
case 2464:
case 3278:
case 1523:
case 1936:
case 3696:
case 3928:
case 4052:
case 119:
case 1035:
case 2603:
case 238:
case 835:
case 9:
case 2233:
case 4035:
case 2086:
case 1052:
case 3190:
case 627:
case 2553:
case 3606:
case 765:
case 3573:
case 370:
case 1848:
case 3083:
case 92:
case 246:
case 1683:
case 536:
case 130:
case 2780:
case 749:
case 1394:
case 4006:
case 1006:
case 3139:
case 430:
case 1714:
case 1995:
case 287:
case 385:
case 548:
case 3635:
case 2564:
case 2718:
case 1477:
case 3599:
case 1434:
case 2966:
case 2885:
case 504:
case 1568:
case 3828:
case 820:
case 74:
case 3248:
case 3250:
case 2029:
case 929:
case 3071:
case 891:
case 3581:
case 1867:
case 3527:
case 2920:
case 3443:
case 125:
case 1805:
case 2844:
case 2224:
case 2937:
case 3530:
case 425:
case 1059:
case 1388:
case 3499:
case 1950:
case 1761:
case 75:
case 222:
case 395:
case 284:
case 2642:
case 1895:
case 297:
case 3815:
case 3427:
case 3481:
case 143:
case 2546:
case 443:
case 3155:
case 3509:
case 991:
case 13:
case 2725:
case 3788:
case 3430:
case 682:
case 829:
case 3543:
case 43:
case 2679:
case 3611:
case 1185:
case 134:
case 2395:
case 2136:
case 1429:
case 681:
case 434:
case 992:
case 1451:
case 1657:
case 3245:
case 290:
case 2888:
case 3133:
case 3417:
case 2587:
case 3980:
case 2559:
case 1740:
case 2034:
case 221:
case 3089:
case 3057:
case 2609:
case 1808:
case 2167:
case 1691:
case 1529:
case 2214:
case 796:
case 3869:
case 1407:
case 3442:
case 3517:
case 1898:
case 1465:
case 1231:
case 3140:
case 3744:
case 827:
case 1984:
case 2630:
case 2178:
case 3158:
case 3479:
case 2200:
case 2305:
case 2459:
case 2487:
case 1344:
case 3001:
case 1597:
case 3818:
case 744:
case 2681:
case 2068:
case 2627:
case 1945:
case 1875:
case 299:
case 3785:
case 2728:
case 708:
case 1137:
case 3653:
case 1174:
case 488:
case 1120:
case 1908:
case 509:
case 275:
case 878:
case 561:
case 1682:
case 3831:
case 377:
case 982:
case 2535:
case 3664:
case 3324:
case 137:
case 2496:
case 2552:
case 3925:
case 1053:
case 2988:
case 2232:
case 280:
case 3275:
case 4053:
case 3449:
case 3026:
case 3918:
case 4038:
case 2406:
case 747:
case 332:
case 3403:
case 2692:
case 1845:
case 1660:
case 1225:
case 1320:
case 2596:
case 2452:
case 117:
case 3060:
case 3472:
case 3969:
case 2435:
case 417:
case 3638:
case 1884:
case 3774:
case 106:
case 629:
case 2150:
case 824:
case 3737:
case 1366:
case 1998:
case 3208:
case 2810:
case 172:
case 2106:
case 967:
case 1574:
case 486:
case 1662:
case 580:
case 1313:
case 876:
case 3103:
case 3645:
case 3860:
case 2741:
case 1520:
case 293:
case 772:
case 4045:
case 2243:
case 2968:
case 2152:
case 2716:
case 3424:
case 575:
case 261:
case 2209:
case 3684:
case 3062:
case 3246:
case 59:
case 3393:
case 1291:
case 3713:
case 2639:
case 3722:
case 1113:
case 1437:
case 2548:
case 2614:
case 2094:
case 342:
case 737:
case 1474:
case 1853:
case 1680:
case 1201:
case 976:
case 1420:
case 867:
case 1876:
case 3786:
case 3303:
case 1631:
case 589:
case 3524:
case 1864:
case 2335:
case 1703:
case 408:
case 3372:
case 2352:
case 2934:
case 2227:
case 2281:
case 1466:
case 3570:
case 1749:
case 3957:
case 2550:
case 788:
case 3193:
case 2847:
case 2536:
case 1669:
case 1329:
case 655:
case 2495:
case 3253:
case 144:
case 1107:
case 3698:
case 623:
case 3533:
case 3926:
case 3018:
case 1165:
case 3797:
case 2256:
case 1282:
case 521:
case 58:
case 660:
case 3276:
case 3458:
case 2819:
case 1717:
case 964:
case 2159:
case 1098:
case 714:
case 1544:
case 3179:
case 2771:
case 283:
case 2632:
case 3960:
case 2567:
case 3751:
case 3675:
case 3069:
case 1008:
case 1811:
case 645:
case 2595:
case 1129:
case 2436:
case 599:
case 326:
case 3857:
case 3540:
case 798:
case 1779:
case 20:
case 3889:
case 2947:
case 3433:
case 1260:
case 1365:
case 2359:
case 2405:
case 734:
case 1197:
case 3025:
case 1953:
case 3379:
case 2578:
case 601:
case 3707:
case 3982:
case 1976:
case 669:
case 1742:
case 1226:
case 3891:
case 1334:
case 4078:
case 2640:
case 3199:
case 3983:
case 2311:
case 2986:
case 1952:
case 3015:
case 3695:
case 2807:
case 3181:
case 204:
case 2508:
case 1095:
case 3432:
case 3127:
case 413:
case 3734:
case 3678:
case 2658:
case 1859:
case 3777:
case 1887:
case 1906:
case 1821:
case 2757:
case 3343:
case 4005:
case 2203:
case 3399:
case 1488:
case 2598:
case 1134:
case 2044:
case 1005:
case 3719:
case 2249:
case 4067:
case 2851:
case 3871:
case 2829:
case 522:
case 3381:
case 3028:
case 3532:
case 597:
case 3667:
case 3327:
case 1799:
case 3461:
case 3143:
case 2272:
case 3605:
case 1319:
case 2913:
case 2922:
case 3192:
case 730:
case 1404:
case 855:
case 149:
case 258:
case 305:
case 4050:
case 2353:
case 3747:
case 945:
case 1987:
case 1702:
case 3514:
case 216:
case 3648:
case 823:
case 150:
case 3883:
case 1773:
case 2670:
case 3302:
case 969:
case 1347:
case 901:
case 2484:
case 3439:
case 4048:
case 450:
case 3500:
case 2782:
case 341:
case 1123:
case 518:
case 1112:
case 2624:
case 587:
case 3723:
case 594:
case 3816:
case 459:
case 960:
case 159:
case 710:
case 248:
case 2545:
case 236:
case 2822:
case 2997:
case 2153:
case 2242:
case 3054:
case 2074:
case 1510:
case 2338:
case 739:
case 1494:
case 3102:
case 140:
case 546:
case 3971:
case 2929:
case 538:
case 1323:
case 2760:
case 1663:
case 2279:
case 1896:
case 3221:
case 986:
case 3364:
case 3624:
case 3782:
case 1872:
case 167:
case 1297:
case 1942:
case 2439:
case 3138:
case 1753:
case 64:
case 1229:
case 1251:
case 1462:
case 2747:
case 778:
case 1580:
case 1849:
case 4070:
case 633:
case 3217:
case 808:
case 579:
case 2192:
case 3445:
case 857:
case 1531:
case 358:
case 2356:
case 1382:
case 3020:
case 2221:
case 2287:
case 724:
case 2259:
case 2971:
case 3929:
case 251:
case 2841:
case 3164:
case 3338:
case 3584:
case 476:
case 1893:
case 1326:
case 886:
case 2054:
case 176:
case 570:
case 2539:
case 402:
case 3997:
case 1207:
case 1480:
case 2590:
case 3153:
case 1738:
case 1674:
case 362:
case 1637:
case 3726:
case 348:
case 2063:
case 847:
case 2156:
case 1360:
case 1265:
case 2723:
case 2712:
case 2816:
case 585:
case 1949:
case 1418:
case 944:
case 2561:
case 2343:
case 1879:
case 2678:
case 3658:
case 3293:
case 3475:
case 854:
case 1711:
case 659:
case 3508:
case 2432:
case 1391:
case 2127:
case 2015:
case 1842:
case 3807:
case 1213:
case 1357:
case 3640:
case 2199:
case 2983:
case 1101:
case 1525:
case 2330:
case 4033:
case 3913:
case 3922:
case 954:
case 1286:
case 2252:
case 2143:
case 3272:
case 1033:
case 1518:
case 57:
case 2916:
case 2381:
case 2028:
case 2532:
case 3085:
case 2327:
case 3408:
case 3146:
case 649:
case 2768:
case 844:
case 2941:
case 273:
case 2871:
case 3829:
case 3249:
case 2206:
case 3598:
case 1817:
case 3044:
case 3633:
case 1157:
case 650:
case 1247:
case 3202:
case 2675:
case 1881:
case 3771:
case 2729:
case 3567:
case 1827:
case 2751:
case 3121:
case 2179:
case 3819:
case 2264:
case 3256:
case 1899:
case 2440:
case 763:
case 913:
case 2317:
case 2018:
case 2801:
case 84:
case 1528:
case 3273:
case 3495:
case 3536:
case 608:
case 95:
case 3912:
case 1371:
case 574:
case 4032:
case 3467:
case 2608:
case 1515:
case 2707:
case 2982:
case 1956:
case 1809:
case 2238:
case 16:
case 2765:
case 528:
case 686:
case 3405:
case 3359:
case 3321:
case 2025:
case 46:
case 3661:
case 85:
case 933:
case 2117:
case 3834:
case 2540:
case 30:
case 3292:
case 1787:
case 813:
case 1171:
case 94:
case 647:
case 3595:
case 1428:
case 3639:
case 2713:
case 2722:
case 3450:
case 1183:
case 949:
case 2470:
case 2393:
case 3716:
case 1341:
case 3004:
case 577:
case 445:
case 3396:
case 654:
case 2860:
case 393:
case 469:
case 2103:
case 101:
case 7:
case 1604:
case 252:
case 3919:
case 72:
case 3690:
case 3106:
case 1554:
case 715:
case 840:
case 3010:
case 1039:
case 965:
case 1383:
case 2570:
case 423:
case 1802:
case 566:
case 160:
case 3847:
case 2989:
case 3934:
case 3227:
case 460:
case 3281:
case 123:
case 4014:
case 3600:
case 3196:
case 644:
case 3352:
case 849:
case 455:
case 1219:
case 1141:
case 2031:
case 2786:
case 1909:
case 3299:
case 268:
case 2882:
case 1000:
case 1735:
case 1116:
case 3306:
case 850:
case 1873:
case 1454:
case 696:
case 3548:
case 242:
case 4073:
case 2275:
case 552:
case 1583:
case 3602:
case 3894:
case 3350:
case 1647:
case 2925:
case 3988:
case 3232:
case 1748:
case 2572:
case 4056:
case 819:
case 614:
case 3535:
case 2664:
case 1056:
case 2082:
case 2324:
case 760:
case 3656:
case 2831:
case 1416:
case 2298:
case 723:
case 1750:
case 1961:
case 2653:
case 3506:
case 2549:
case 3673:
case 755:
case 4002:
case 1002:
case 1814:
case 39:
case 2737:
case 769:
case 3754:
case 1483:
case 3435:
case 415:
case 181:
case 1612:
case 3596:
case 3261:
case 839:
case 2060:
case 115:
case 1288:
case 3763:
case 389:
case 3692:
case 698:
case 2862:
case 3148:
case 745:
case 1890:
case 2449:
case 2026:
case 2918:
case 3406:
case 3239:
case 3167:
case 1795:
case 2284:
case 274:
case 3609:
case 321:
case 2089:
case 2057:
case 1914:
case 3105:
case 3643:
case 3034:
case 3521:
case 953:
case 429:
case 672:
case 83:
case 2825:
case 1634:
case 2133:
case 1778:
case 2340:
case 606:
case 390:
case 1677:
case 1471:
case 76:
case 3136:
case 1009:
case 925:
case 3290:
case 1900:
case 3395:
case 688:
case 1294:
case 1855:
case 120:
case 399:
case 463:
case 163:
case 3068:
case 3367:
case 1736:
case 3421:
case 2479:
case 3305:
case 3487:
case 2001:
case 2818:
case 3178:
case 1619:
case 1099:
case 825:
case 1705:
case 228:
case 1030:
case 2744:
case 2140:
case 81:
case 4030:
case 943:
case 303:
case 1081:
case 1027:
case 3195:
case 2442:
case 853:
case 4027:
case 191:
case 3336:
case 3214:
case 4081:
case 2869:
case 3224:
case 2530:
case 1798:
case 192:
case 4017:
case 1017:
case 934:
case 492:
case 1697:
case 2954:
case 2161:
case 2527:
case 3920:
case 814:
case 3446:
case 619:
case 3375:
case 2071:
case 2963:
case 1651:
case 1369:
case 2248:
case 1629:
case 1775:
case 2828:
case 1833:
case 3097:
case 1501:
case 3718:
case 1457:
case 630:
case 1489:
case 914:
case 764:
case 2687:
case 3065:
case 2543:
case 1118:
case 3679:
case 3725:
case 2788:
case 2430:
case 834:
case 2155:
case 3175:
case 2509:
case 639:
case 573:
case 4042:
case 1042:
case 2815:
case 2427:
case 2481:
case 3007:
case 1266:
case 1591:
case 898:
case 1274:
case 384:
case 1237:
case 322:
case 1708:
case 4079:
case 610:
case 1401:
case 1079:
case 1665:
case 2704:
case 2100:
case 2696:
case 279:
case 3985:
case 2016:
case 3258:
case 231:
case 3384:
case 3013:
case 988:
case 3693:
case 1526:
case 3762:
case 2339:
case 806:
case 2854:
case 3944:
case 4093:
case 3874:
case 1784:
case 182:
case 356:
case 817:
case 702:
case 2592:
case 2456:
case 1482:
case 3345:
case 3240:
case 1131:
case 318:
case 643:
case 1560:
case 478:
case 1003:
case 1824:
case 211:
case 3564:
case 1244:
case 4003:
case 2300:
case 178:
case 2205:
case 3731:
case 2652:
case 1686:
case 888:
case 2267:
case 2139:
case 1049:
case 2502:
case 4049:
case 3184:
case 3438:
case 1940:
case 1162:
case 2314:
case 2794:
case 2190:
case 2606:
case 2573:
case 1285:
case 1380:
case 972:
case 653:
case 3086:
case 837:
case 3576:
case 2492:
case 1582:
case 4072:
case 563:
case 426:
case 3811:
case 3485:
case 609:
case 3779:
case 2721:
case 774:
case 2902:
case 2787:
case 3260:
case 3365:
case 3444:
case 1765:
case 4025:
case 1558:
case 1982:
case 1238:
case 3976:
case 1608:
case 2515:
case 2371:
case 3669:
case 1142:
case 1253:
case 1317:
case 1698:
case 3165:
case 1533:
case 1018:
case 1801:
case 1797:
case 3282:
case 1440:
case 2899:
case 3938:
case 1264:
case 2830:
case 3717:
case 396:
case 1179:
case 3544:
case 3397:
case 1729:
case 1960:
case 728:
case 2247:
case 3122:
case 142:
case 2943:
case 2268:
case 1349:
case 3680:
case 2454:
case 2735:
case 3201:
case 2000:
case 515:
case 3420:
case 683:
case 2909:
case 1786:
case 2752:
case 168:
case 2856:
case 3772:
case 1882:
case 581:
case 3946:
case 52:
case 936:
case 807:
case 2463:
case 962:
case 1524:
case 3864:
case 4031:
case 357:
case 3703:
case 858:
case 3386:
case 3911:
case 3466:
case 1080:
case 2802:
case 3749:
case 4080:
case 2383:
case 1570:
case 948:
case 777:
case 1193:
case 1989:
case 2706:
case 3793:
case 1149:
case 1211:
case 3574:
case 3322:
case 3662:
case 386:
case 3313:
case 3537:
case 2930:
case 2892:
case 2796:
case 1103:
case 201:
case 1645:
case 3289:
case 2927:
case 1860:
case 535:
case 2981:
case 2316:
case 848:
case 245:
case 1424:
case 916:
case 766:
case 2341:
case 1062:
case 3838:
case 60:
case 958:
case 907:
case 2090:
case 1826:
case 1901:
case 3566:
case 3291:
case 1722:
case 4062:
case 1713:
case 4063:
case 2620:
case 578:
case 2360:
case 2265:
case 809:
case 861:
case 1816:
case 604:
case 2182:
case 1156:
case 3504:
case 2562:
case 731:
case 1414:
case 2637:
case 2207:
case 2674:
case 1173:
case 779:
case 2666:
case 1054:
case 2326:
case 1102:
case 202:
case 3494:
case 2893:
case 900:
case 3663:
case 3312:
case 151:
case 3323:
case 3896:
case 1221:
case 451:
case 3792:
case 3404:
case 349:
case 2024:
case 2803:
case 2531:
case 3806:
case 3921:
case 2849:
case 3702:
case 3959:
case 1490:
case 1373:
case 2229:
case 909:
case 2070:
case 711:
case 2251:
case 1883:
case 3347:
case 2753:
case 3594:
case 800:
case 2126:
case 1439:
case 524:
case 267:
case 365:
case 3852:
case 441:
case 3835:
case 2993:
case 2189:
case 2157:
case 3177:
case 3488:
case 3005:
case 1719:
case 473:
case 3067:
case 3996:
case 1206:
case 3727:
case 883:
case 2569:
case 658:
case 1555:
case 90:
case 1109:
case 1768:
case 1381:
case 1028:
case 333:
case 1327:
case 2191:
case 2286:
case 1143:
case 2033:
case 2518:
case 3319:
case 616:
case 34:
case 527:
case 3588:
case 3334:
case 2101:
case 2389:
case 3078:
case 3743:
case 2357:
case 1983:
case 2222:
case 4015:
case 1015:
case 2842:
case 2972:
case 1695:
case 1181:
case 313:
case 1127:
case 1432:
case 77:
case 1455:
case 1309:
case 2711:
case 3119:
case 35:
case 2040:
case 1130:
case 3887:
case 80:
case 795:
case 3859:
case 2879:
case 3821:
case 3087:
case 3534:
case 2665:
case 3388:
case 3021:
case 2325:
case 2557:
case 3761:
case 2840:
case 1499:
case 2589:
case 495:
case 2708:
case 195:
case 3895:
case 3254:
case 3468:
case 1427:
case 343:
case 2591:
case 1155:
case 1509:
case 3878:
case 2858:
case 1659:
case 2118:
case 1361:
case 1621:
case 3477:
case 1599:
case 3434:
case 3188:
case 2833:
case 694:
case 3755:
case 687:
case 899:
case 3836:
case 1963:
case 3732:
case 1355:
case 803:
case 353:
case 4071:
case 1332:
case 1527:
case 325:
case 1443:
case 2697:
case 3805:
case 1954:
case 1530:
case 292:
case 2798:
case 319:
case 2331:
case 3104:
case 3700:
case 1492:
case 1556:
case 1915:
case 880:
case 1573:
case 2285:
case 2380:
case 170:
case 4083:
case 3228:
case 502:
case 1314:
case 2958:
case 470:
case 2162:
case 1236:
case 2870:
case 1502:
case 3683:
case 2940:
case 3850:
case 3006:
case 89:
case 705:
case 3714:
case 3110:
case 2049:
case 3995:
case 2244:
case 411:
case 2686:
case 1652:
case 3412:
case 2560:
case 371:
case 4041:
case 3967:
case 1592:
case 980:
case 2131:
case 282:
case 2622:
case 2362:
case 2093:
case 751:
case 3905:
case 1390:
case 1295:
case 2784:
case 2526:
case 2933:
case 1339:
case 310:
case 1402:
case 3790:
case 3194:
case 479:
case 3936:
case 1863:
case 889:
case 1704:
case 1100:
case 431:
case 684:
case 179:
case 1449:
case 1918:
case 2354:
case 987:
case 3374:
case 432:
case 994:
case 3513:
case 3522:
case 68:
case 4026:
case 621:
case 2288:
case 3660:
case 2932:
case 555:
case 317:
case 3486:
case 1472:
case 215:
case 2092:
case 281:
case 2612:
case 946:
case 2623:
case 4060:
case 306:
case 2483:
case 2:
case 856:
case 1737:
case 3269:
case 3422:
case 2961:
case 2750:
case 2154:
case 1880:
case 3174:
case 3770:
case 3724:
case 2416:
case 699:
case 1676:
case 1503:
case 569:
case 2441:
case 956:
case 501:
case 1324:
case 4082:
case 337:
case 1572:
case 3586:
case 603:
case 235:
case 3166:
case 1925:
case 2073:
case 846:
case 2748:
case 1493:
case 2583:
case 918:
case 2767:
case 1869:
case 2081:
case 3385:
case 3280:
case 1442:
case 3465:
case 2939:
case 3898:
case 1517:
case 428:
case 56:
case 2705:
case 128:
case 3733:
case 2619:
case 1479:
case 984:
case 3344:
case 1001:
case 1818:
case 2115:
case 2832:
case 2736:
case 2294:
case 220:
case 3875:
case 1542:
case 3429:
case 4091:
case 3046:
case 2009:
case 1245:
case 2204:
case 3657:
case 2778:
case 1417:
case 2634:
case 3565:
case 3497:
case 3740:
case 3144:
case 2861:
case 4057:
case 2795:
case 1931:
case 174:
case 1284:
case 689:
case 897:
case 3011:
case 3808:
case 2315:
case 3691:
case 822:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755090001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,];
var gg_b = "1755090001/";

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
