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
case 3400:
case 3139:
case 512:
case 2438:
case 2010:
case 2367:
case 303:
case 3237:
case 152:
case 1883:
case 3123:
case 2242:
case 910:
case 1148:
case 2218:
case 3273:
case 3616:
case 1425:
case 3855:
case 2806:
case 2356:
case 364:
case 1596:
case 527:
case 3804:
case 436:
case 3770:
case 2654:
case 371:
case 1084:
case 1995:
case 3708:
case 878:
case 2062:
case 3245:
case 2730:
case 1026:
case 2540:
case 3314:
case 3656:
case 234:
case 3281:
case 536:
case 2605:
case 786:
case 2891:
case 2179:
case 2852:
case 3947:
case 3478:
case 3003:
case 902:
case 2171:
case 412:
case 1509:
case 839:
case 24:
case 3667:
case 1297:
case 1501:
case 207:
case 4021:
case 773:
case 2050:
case 3401:
case 1808:
case 1333:
case 2693:
case 2011:
case 399:
case 2019:
case 2108:
case 3130:
case 1715:
case 2787:
case 1047:
case 3144:
case 1566:
case 943:
case 612:
case 2522:
case 439:
case 1321:
case 1578:
case 627:
case 2986:
case 2397:
case 2924:
case 3771:
case 921:
case 1557:
case 3779:
case 1169:
case 2861:
case 87:
case 1517:
case 717:
case 2869:
case 1161:
case 2541:
case 3525:
case 2494:
case 1035:
case 1474:
case 67:
case 3697:
case 106:
case 1267:
case 2549:
case 2220:
case 1704:
case 215:
case 248:
case 1870:
case 2890:
case 185:
case 342:
case 3393:
case 1965:
case 1500:
case 1689:
case 722:
case 2051:
case 1681:
case 1755:
case 539:
case 2766:
case 464:
case 3675:
case 2265:
case 3042:
case 3954:
case 3560:
case 1798:
case 223:
case 2037:
case 2778:
case 336:
case 3713:
case 475:
case 1722:
case 1136:
case 2956:
case 37:
case 2515:
case 571:
case 2836:
case 2343:
case 496:
case 3591:
case 300:
case 2757:
case 3632:
case 403:
case 1388:
case 913:
case 2967:
case 842:
case 3101:
case 3109:
case 1611:
case 1659:
case 3029:
case 503:
case 2089:
case 1286:
case 1628:
case 3021:
case 3262:
case 2332:
case 1692:
case 2672:
case 1651:
case 218:
case 2717:
case 1523:
case 1490:
case 899:
case 312:
case 1224:
case 2916:
case 3738:
case 327:
case 1174:
case 266:
case 564:
case 2555:
case 1395:
case 3963:
case 575:
case 3506:
case 3548:
case 1469:
case 928:
case 70:
case 294:
case 3196:
case 747:
case 3753:
case 2203:
case 3868:
case 471:
case 3561:
case 2386:
case 1607:
case 671:
case 378:
case 4095:
case 1014:
case 3569:
case 3841:
case 2324:
case 2825:
case 1448:
case 3384:
case 1125:
case 1063:
case 3849:
case 2796:
case 1776:
case 1275:
case 2295:
case 3423:
case 1412:
case 1929:
case 3794:
case 499:
case 1530:
case 269:
case 3020:
case 1650:
case 2080:
case 1365:
case 18:
case 3993:
case 2882:
case 190:
case 1499:
case 3166:
case 1491:
case 3822:
case 2471:
case 1544:
case 599:
case 3898:
case 1005:
case 875:
case 696:
case 2701:
case 1460:
case 664:
case 1942:
case 675:
case 1054:
case 2024:
case 2887:
case 3995:
case 1363:
case 1457:
case 3827:
case 1708:
case 1746:
case 1245:
case 2115:
case 762:
case 3026:
case 1947:
case 953:
case 3199:
case 2498:
case 1478:
case 1003:
case 488:
case 3879:
case 3152:
case 974:
case 2911:
case 3680:
case 3509:
case 309:
case 3297:
case 2620:
case 667:
case 633:
case 2839:
case 2951:
case 588:
case 4093:
case 1400:
case 88:
case 103:
case 961:
case 2761:
case 1602:
case 2769:
case 3883:
case 2449:
case 2293:
case 1935:
case 2155:
case 2441:
case 1574:
case 164:
case 1804:
case 738:
case 175:
case 1417:
case 1770:
case 2790:
case 3517:
case 2712:
case 2468:
case 2907:
case 3161:
case 1496:
case 2043:
case 4005:
case 3474:
case 3035:
case 3342:
case 1280:
case 2337:
case 1697:
case 2677:
case 393:
case 3704:
case 3190:
case 2553:
case 3318:
case 3870:
case 3965:
case 1393:
case 949:
case 3689:
case 330:
case 3072:
case 2538:
case 2706:
case 1088:
case 2629:
case 3755:
case 3681:
case 1401:
case 888:
case 3673:
case 590:
case 2263:
case 3846:
case 744:
case 297:
case 3715:
case 2950:
case 1130:
case 1144:
case 2214:
case 3047:
case 567:
case 3903:
case 3566:
case 2381:
case 2389:
case 260:
case 2513:
case 688:
case 3578:
case 3321:
case 381:
case 2345:
case 73:
case 795:
case 3436:
case 783:
case 3637:
case 3557:
case 2791:
case 1771:
case 2752:
case 1779:
case 2799:
case 2434:
case 2226:
case 3659:
case 96:
case 919:
case 2725:
case 3539:
case 3531:
case 3628:
case 3286:
case 3749:
case 3692:
case 409:
case 1021:
case 2284:
case 3490:
case 624:
case 1512:
case 282:
case 2311:
case 1033:
case 3224:
case 2583:
case 112:
case 681:
case 1738:
case 1077:
case 127:
case 2097:
case 1250:
case 1506:
case 3395:
case 1876:
case 2176:
case 1196:
case 1914:
case 4084:
case 1753:
case 1834:
case 2782:
case 1335:
case 3587:
case 2695:
case 136:
case 1560:
case 2134:
case 3722:
case 1713:
case 2527:
case 798:
case 2140:
case 1210:
case 606:
case 1764:
case 693:
case 2328:
case 2571:
case 1591:
case 1372:
case 3388:
case 1599:
case 830:
case 509:
case 685:
case 3920:
case 1101:
case 1109:
case 1018:
case 714:
case 3530:
case 367:
case 2067:
case 333:
case 3650:
case 1020:
case 3918:
case 2973:
case 2235:
case 390:
case 3734:
case 652:
case 3499:
case 968:
case 493:
case 3452:
case 1166:
case 2310:
case 1898:
case 3182:
case 251:
case 2603:
case 3544:
case 2056:
case 2307:
case 1686:
case 1292:
case 2272:
case 3942:
case 2937:
case 1487:
case 757:
case 1561:
case 2817:
case 735:
case 178:
case 1117:
case 1569:
case 1219:
case 1841:
case 3448:
case 3406:
case 3125:
case 4047:
case 3933:
case 2665:
case 237:
case 3412:
case 2570:
case 2350:
case 1431:
case 593:
case 3303:
case 3838:
case 2989:
case 2774:
case 585:
case 3099:
case 291:
case 3091:
case 465:
case 3300:
case 692:
case 3268:
case 2338:
case 1698:
case 453:
case 3518:
case 2353:
case 892:
case 387:
case 1593:
case 36:
case 3664:
case 319:
case 2908:
case 3060:
case 2124:
case 1824:
case 1325:
case 3454:
case 2747:
case 3184:
case 2456:
case 3126:
case 3317:
case 446:
case 3862:
case 1759:
case 3048:
case 760:
case 1969:
case 2617:
case 244:
case 1961:
case 2004:
case 75:
case 2313:
case 574:
case 1031:
case 2545:
case 3378:
case 276:
case 2735:
case 1039:
case 2581:
case 553:
case 2970:
case 3743:
case 23:
case 3234:
case 2364:
case 2865:
case 113:
case 3012:
case 283:
case 3533:
case 2402:
case 2983:
case 3301:
case 1433:
case 1707:
case 262:
case 3923:
case 3309:
case 368:
case 3859:
case 2888:
case 861:
case 98:
case 1188:
case 1421:
case 3939:
case 3892:
case 1514:
case 1843:
case 2143:
case 3222:
case 3298:
case 1477:
case 1906:
case 1948:
case 1563:
case 316:
case 1264:
case 646:
case 3396:
case 758:
case 4025:
case 1554:
case 1960:
case 2394:
case 1442:
case 1195:
case 2175:
case 1253:
case 3987:
case 3241:
case 865:
case 2726:
case 238:
case 853:
case 874:
case 1030:
case 1762:
case 332:
case 3811:
case 140:
case 1832:
case 3147:
case 674:
case 653:
case 2132:
case 492:
case 1177:
case 2197:
case 1897:
case 346:
case 1925:
case 726:
case 4060:
case 2068:
case 1279:
case 1096:
case 2858:
case 487:
case 3472:
case 3845:
case 419:
case 46:
case 2829:
case 3881:
case 2938:
case 632:
case 1133:
case 3565:
case 374:
case 3670:
case 353:
case 2346:
case 2308:
case 4052:
case 450:
case 1227:
case 2913:
case 3447:
case 3204:
case 110:
case 587:
case 1982:
case 56:
case 519:
case 280:
case 361:
case 3503:
case 2644:
case 952:
case 668:
case 4012:
case 868:
case 159:
case 1001:
case 257:
case 29:
case 3193:
case 2206:
case 550:
case 3756:
case 1142:
case 3837:
case 2475:
case 2842:
case 1495:
case 2040:
case 737:
case 1361:
case 763:
case 616:
case 755:
case 3105:
case 416:
case 3426:
case 2424:
case 3595:
case 2290:
case 3484:
case 3627:
case 3154:
case 4061:
case 3880:
case 349:
case 1867:
case 1312:
case 3323:
case 930:
case 2820:
case 3909:
case 2261:
case 3331:
case 4090:
case 2098:
case 468:
case 3082:
case 532:
case 2269:
case 3339:
case 2623:
case 143:
case 2102:
case 924:
case 392:
case 3588:
case 687:
case 1399:
case 432:
case 1352:
case 1000:
case 2528:
case 66:
case 3797:
case 2551:
case 1017:
case 121:
case 2085:
case 156:
case 2327:
case 2116:
case 1208:
case 2049:
case 1246:
case 1789:
case 1974:
case 2041:
case 1655:
case 1816:
case 1535:
case 2625:
case 2788:
case 1006:
case 3751:
case 1357:
case 936:
case 1414:
case 2322:
case 1378:
case 2398:
case 4009:
case 3382:
case 502:
case 1366:
case 3039:
case 3990:
case 1743:
case 2083:
case 410:
case 3165:
case 1653:
case 1012:
case 1533:
case 3103:
case 643:
case 2682:
case 912:
case 2795:
case 1099:
case 2296:
case 2079:
case 1300:
case 1052:
case 402:
case 2071:
case 1613:
case 3698:
case 1268:
case 289:
case 1850:
case 1930:
case 843:
case 119:
case 217:
case 2385:
case 1060:
case 2884:
case 222:
case 3824:
case 3325:
case 1454:
case 621:
case 1184:
case 328:
case 856:
case 656:
case 2162:
case 748:
case 3719:
case 3886:
case 1862:
case 1126:
case 884:
case 2200:
case 3238:
case 2368:
case 456:
case 2376:
case 1396:
case 978:
case 3634:
case 3442:
case 484:
case 3374:
case 1241:
case 3418:
case 3762:
case 2119:
case 1786:
case 1249:
case 2008:
case 2473:
case 939:
case 3952:
case 2847:
case 2070:
case 3433:
case 3707:
case 4066:
case 734:
case 168:
case 1309:
case 859:
case 659:
case 1931:
case 3429:
case 2481:
case 543:
case 1828:
case 2489:
case 1892:
case 2159:
case 3421:
case 2765:
case 2266:
case 1069:
case 556:
case 3676:
case 425:
case 7:
case 1298:
case 2278:
case 273:
case 2955:
case 1135:
case 584:
case 3948:
case 3906:
case 2334:
case 3264:
case 2835:
case 1694:
case 2674:
case 1447:
case 413:
case 1204:
case 903:
case 3982:
case 4023:
case 2893:
case 1873:
case 1608:
case 2411:
case 3118:
case 1756:
case 82:
case 2223:
case 3142:
case 3283:
case 964:
case 2524:
case 3495:
case 1957:
case 2137:
case 996:
case 3780:
case 2239:
case 2586:
case 1767:
case 2985:
case 677:
case 1074:
case 1435:
case 2941:
case 3897:
case 971:
case 769:
case 2661:
case 1917:
case 3279:
case 1845:
case 1344:
case 3488:
case 1215:
case 3158:
case 1881:
case 640:
case 2690:
case 165:
case 343:
case 3802:
case 1588:
case 723:
case 3352:
case 3572:
case 1797:
case 2410:
case 2315:
case 2814:
case 2968:
case 2733:
case 2976:
case 628:
case 1114:
case 477:
case 3745:
case 3360:
case 2230:
case 2863:
case 3789:
case 3246:
case 741:
case 3816:
case 1025:
case 1163:
case 2729:
case 3773:
case 718:
case 1105:
case 2718:
case 3936:
case 3856:
case 1426:
case 577:
case 2355:
case 3306:
case 3348:
case 1595:
case 2575:
case 2660:
case 3057:
case 1154:
case 270:
case 3120:
case 540:
case 20:
case 1880:
case 794:
case 149:
case 3867:
case 2691:
case 2652:
case 1671:
case 942:
case 3737:
case 2742:
case 1679:
case 1339:
case 3066:
case 644:
case 170:
case 2154:
case 1934:
case 3424:
case 1575:
case 2595:
case 2426:
case 3486:
case 1940:
case 1462:
case 844:
case 1742:
case 2082:
case 3269:
case 2339:
case 2679:
case 1652:
case 1013:
case 538:
case 63:
case 695:
case 249:
case 147:
case 2323:
case 1450:
case 3519:
case 2880:
case 10:
case 891:
case 1777:
case 2797:
case 3592:
case 3559:
case 3639:
case 2683:
case 292:
case 1053:
case 1612:
case 398:
case 2025:
case 1729:
case 1606:
case 479:
case 3085:
case 3994:
case 3049:
case 1863:
case 2114:
case 1976:
case 2996:
case 1968:
case 1543:
case 3443:
case 78:
case 1661:
case 733:
case 3291:
case 3507:
case 246:
case 1941:
case 544:
case 790:
case 1985:
case 1094:
case 2435:
case 3197:
case 253:
case 3346:
case 3833:
case 491:
case 1287:
case 274:
case 2215:
case 2900:
case 1145:
case 1459:
case 2881:
case 53:
case 3858:
case 595:
case 2889:
case 2472:
case 3821:
case 1451:
case 1492:
case 3510:
case 2193:
case 1173:
case 3206:
case 2756:
case 3370:
case 3630:
case 357:
case 2646:
case 335:
case 1411:
case 2608:
case 3964:
case 2873:
case 3550:
case 380:
case 261:
case 2503:
case 495:
case 2447:
case 43:
case 662:
case 1586:
case 1720:
case 2767:
case 3562:
case 3040:
case 1524:
case 2957:
case 1137:
case 3034:
case 2837:
case 1489:
case 2828:
case 1159:
case 2851:
case 2859:
case 1151:
case 2931:
case 598:
case 3888:
case 2923:
case 0:
case 268:
case 3983:
case 2090:
case 4022:
case 951:
case 362:
case 514:
case 1516:
case 216:
case 1955:
case 186:
case 2061:
case 2222:
case 1340:
case 2069:
case 1437:
case 1703:
case 414:
case 3175:
case 2987:
case 904:
case 3394:
case 3927:
case 1376:
case 4049:
case 752:
case 1368:
case 379:
case 1847:
case 831:
case 3132:
case 2724:
case 937:
case 3784:
case 101:
case 1217:
case 955:
case 1567:
case 3601:
case 2285:
case 1473:
case 2520:
case 2819:
case 2241:
case 3225:
case 631:
case 2930:
case 26:
case 117:
case 580:
case 219:
case 2664:
case 3908:
case 1480:
case 3274:
case 2518:
case 3353:
case 189:
case 431:
case 3573:
case 706:
case 250:
case 2613:
case 3803:
case 3338:
case 3678:
case 1682:
case 2944:
case 2276:
case 2099:
case 1296:
case 929:
case 785:
case 1826:
case 793:
case 3456:
case 3015:
case 2405:
case 1341:
case 4076:
case 2542:
case 2060:
case 1385:
case 1884:
case 730:
case 1027:
case 122:
case 3657:
case 344:
case 1107:
case 3004:
case 1597:
case 2577:
case 3772:
case 781:
case 2006:
case 4040:
case 2653:
case 2012:
case 2533:
case 480:
case 3402:
case 531:
case 2743:
case 33:
case 2234:
case 2240:
case 3236:
case 3589:
case 3600:
case 457:
case 2378:
case 1528:
case 2000:
case 736:
case 2391:
case 2352:
case 1551:
case 617:
case 3777:
case 3038:
case 3410:
case 689:
case 1559:
case 2399:
case 1102:
case 911:
case 2465:
case 889:
case 243:
case 817:
case 3053:
case 198:
case 2655:
case 2816:
case 822:
case 1041:
case 573:
case 2535:
case 3648:
case 3729:
case 700:
case 256:
case 2745:
case 2360:
case 554:
case 3758:
case 3733:
case 3244:
case 3976:
case 3814:
case 2604:
case 2270:
case 225:
case 3355:
case 1424:
case 454:
case 3575:
case 2856:
case 2615:
case 3805:
case 3304:
case 3940:
case 1793:
case 1486:
case 3742:
case 2547:
case 948:
case 3699:
case 2066:
case 1022:
case 727:
case 405:
case 1261:
case 3691:
case 3013:
case 4070:
case 2403:
case 3532:
case 3180:
case 2867:
case 1511:
case 501:
case 1519:
case 1167:
case 805:
case 3419:
case 3173:
case 1248:
case 2009:
case 1206:
case 157:
case 2390:
case 1550:
case 3893:
case 19:
case 135:
case 3411:
case 180:
case 517:
case 2982:
case 1432:
case 3922:
case 589:
case 3998:
case 605:
case 739:
case 3586:
case 1562:
case 2780:
case 2526:
case 1040:
case 3239:
case 3524:
case 2495:
case 1475:
case 673:
case 886:
case 1212:
case 654:
case 3223:
case 2142:
case 1299:
case 2279:
case 422:
case 2271:
case 1507:
case 3661:
case 1068:
case 3941:
case 2897:
case 934:
case 1197:
case 2177:
case 3094:
case 3690:
case 4071:
case 2227:
case 202:
case 1308:
case 1833:
case 1953:
case 308:
case 1714:
case 1829:
case 2488:
case 2158:
case 94:
case 1763:
case 1858:
case 9:
case 1510:
case 489:
case 3492:
case 2129:
case 1821:
case 131:
case 1175:
case 2195:
case 972:
case 2634:
case 1394:
case 2374:
case 3556:
case 570:
case 2640:
case 3376:
case 3200:
case 179:
case 2238:
case 1132:
case 796:
case 3847:
case 608:
case 4053:
case 2044:
case 1784:
case 4038:
case 2030:
case 1601:
case 3567:
case 3119:
case 3473:
case 3008:
case 764:
case 138:
case 1609:
case 1580:
case 771:
case 3489:
case 3159:
case 3872:
case 40:
case 1888:
case 3151:
case 3481:
case 3128:
case 3070:
case 3516:
case 3334:
case 3835:
case 3674:
case 2710:
case 3955:
case 2563:
case 2948:
case 2906:
case 2213:
case 1143:
case 2668:
case 373:
case 2514:
case 1282:
case 2336:
case 2676:
case 1696:
case 144:
case 1004:
case 670:
case 923:
case 2751:
case 2792:
case 2649:
case 2641:
case 1416:
case 1402:
case 941:
case 1970:
case 3083:
case 213:
case 195:
case 1364:
case 13:
case 2382:
case 508:
case 1600:
case 3398:
case 60:
case 3150:
case 1946:
case 2294:
case 317:
case 1467:
case 1353:
case 2420:
case 1573:
case 2622:
case 1678:
case 2698:
case 1338:
case 1803:
case 3682:
case 3795:
case 408:
case 191:
case 3296:
case 3079:
case 1666:
case 2711:
case 2886:
case 4094:
case 3826:
case 1456:
case 228:
case 2087:
case 994:
case 1124:
case 1657:
case 3027:
case 2885:
case 2384:
case 2849:
case 1141:
case 1149:
case 2841:
case 1016:
case 3997:
case 2117:
case 2569:
case 759:
case 2561:
case 1817:
case 1774:
case 1989:
case 3138:
case 2100:
case 2431:
case 548:
case 64:
case 1570:
case 163:
case 2423:
case 239:
case 1350:
case 3483:
case 1665:
case 151:
case 1878:
case 2178:
case 1736:
case 3080:
case 2993:
case 4059:
case 1067:
case 126:
case 4051:
case 31:
case 3164:
case 4028:
case 1546:
case 954:
case 2157:
case 2487:
case 3684:
case 1857:
case 973:
case 2228:
case 986:
case 2251:
case 702:
case 1272:
case 2292:
case 3288:
case 1415:
case 3709:
case 1056:
case 820:
case 27:
case 3515:
case 3343:
case 743:
case 3956:
case 2210:
case 1134:
case 3037:
case 1527:
case 534:
case 1695:
case 1782:
case 2834:
case 2042:
case 2018:
case 2430:
case 4010:
case 721:
case 815:
case 3073:
case 3408:
case 1980:
case 3446:
case 784:
case 1809:
case 1579:
case 5:
case 2591:
case 756:
case 200:
case 1571:
case 1328:
case 3757:
case 2632:
case 2372:
case 212:
case 1319:
case 318:
case 2512:
case 611:
case 2033:
case 1311:
case 345:
case 4050:
case 2058:
case 3089:
case 2021:
case 3332:
case 44:
case 2347:
case 1688:
case 1226:
case 2029:
case 1725:
case 3081:
case 2914:
case 2753:
case 2868:
case 922:
case 1168:
case 2643:
case 3504:
case 3555:
case 434:
case 3375:
case 2506:
case 520:
case 2548:
case 4062:
case 1097:
case 2077:
case 2738:
case 366:
case 3700:
case 160:
case 1513:
case 2727:
case 1389:
case 1345:
case 3598:
case 3787:
case 2582:
case 311:
case 2144:
case 569:
case 845:
case 197:
case 3146:
case 1564:
case 1950:
case 15:
case 818:
case 1618:
case 2401:
case 1263:
case 3693:
case 3011:
case 1799:
case 1075:
case 1642:
case 3397:
case 472:
case 666:
case 894:
case 2697:
case 1337:
case 3731:
case 3549:
case 3220:
case 3739:
case 572:
case 623:
case 2496:
case 2783:
case 1043:
case 3861:
case 970:
case 841:
case 1629:
case 4080:
case 1205:
case 728:
case 1658:
case 947:
case 3028:
case 469:
case 1538:
case 1621:
case 3051:
case 1553:
case 3890:
case 242:
case 2393:
case 1254:
case 641:
case 1769:
case 81:
case 3242:
case 1380:
case 869:
case 158:
case 441:
case 203:
case 3367:
case 2602:
case 4073:
case 2139:
case 1959:
case 3010:
case 1928:
case 545:
case 669:
case 1839:
case 518:
case 2972:
case 2131:
case 1992:
case 1104:
case 4037:
case 3943:
case 2417:
case 3356:
case 3576:
case 1441:
case 2354:
case 1594:
case 594:
case 2574:
case 3806:
case 3848:
case 740:
case 2935:
case 1155:
case 2273:
case 3663:
case 3229:
case 2815:
case 334:
case 3605:
case 1086:
case 2746:
case 2289:
case 3258:
case 466:
case 1115:
case 3221:
case 2245:
case 3062:
case 3730:
case 271:
case 3860:
case 2187:
case 2457:
case 494:
case 3654:
case 3127:
case 3316:
case 3534:
case 4045:
case 307:
case 3302:
case 4081:
case 3932:
case 3171:
case 2466:
case 3852:
case 2947:
case 3413:
case 2478:
case 2003:
case 1498:
case 1471:
case 2491:
case 746:
case 55:
case 658:
case 3878:
case 2182:
case 597:
case 3603:
case 2544:
case 3198:
case 1113:
case 3866:
case 2499:
case 2243:
case 1479:
case 3736:
case 28:
case 3973:
case 2740:
case 1080:
case 1164:
case 2530:
case 11:
case 267:
case 858:
case 233:
case 326:
case 2942:
case 765:
case 1709:
case 1626:
case 3415:
case 774:
case 2063:
case 3141:
case 3016:
case 1997:
case 3455:
case 1825:
case 2448:
case 4075:
case 3404:
case 172:
case 3817:
case 1138:
case 2958:
case 3989:
case 3774:
case 3800:
case 2929:
case 2838:
case 4032:
case 2412:
case 3570:
case 460:
case 3002:
case 1483:
case 1295:
case 2933:
case 3665:
case 3583:
case 288:
case 1902:
case 991:
case 2523:
case 2490:
case 85:
case 897:
case 145:
case 3311:
case 2531:
case 558:
case 2749:
case 697:
case 1045:
case 1332:
case 3725:
case 749:
case 2461:
case 194:
case 1504:
case 4024:
case 1555:
case 1874:
case 2894:
case 2174:
case 1916:
case 3097:
case 1700:
case 1515:
case 1836:
case 792:
case 2136:
case 1956:
case 1037:
case 2798:
case 3134:
case 2722:
case 1446:
case 2093:
case 2611:
case 3980:
case 976:
case 1967:
case 2920:
case 3809:
case 1647:
case 458:
case 93:
case 3579:
case 983:
case 3328:
case 141:
case 3351:
case 206:
case 1585:
case 1549:
case 1220:
case 1739:
case 1541:
case 1494:
case 4056:
case 1869:
case 2161:
case 3043:
case 76:
case 3476:
case 1861:
case 3468:
case 3748:
case 2256:
case 1059:
case 537:
case 3205:
case 3910:
case 2689:
case 2500:
case 2072:
case 3621:
case 3538:
case 451:
case 3553:
case 3254:
case 3389:
case 2358:
case 360:
case 463:
case 2321:
case 281:
case 2329:
case 111:
case 682:
case 3381:
case 526:
case 397:
case 2216:
case 35:
case 3564:
case 3830:
case 3618:
case 1011:
case 3263:
case 2333:
case 2846:
case 829:
case 3642:
case 404:
case 3434:
case 2637:
case 1924:
case 1397:
case 2377:
case 2557:
case 2202:
case 914:
case 3791:
case 1986:
case 629:
case 4016:
case 1229:
case 1605:
case 768:
case 1258:
case 3086:
case 1062:
case 429:
case 3115:
case 804:
case 604:
case 1744:
case 1860:
case 2995:
case 1975:
case 2827:
case 3024:
case 2160:
case 107:
case 209:
case 931:
case 863:
case 1464:
case 2680:
case 2509:
case 837:
case 637:
case 663:
case 1899:
case 2191:
case 1171:
case 2152:
case 2871:
case 3422:
case 1852:
case 2199:
case 1891:
case 3498:
case 2883:
case 2112:
case 358:
case 1242:
case 3380:
case 1453:
case 3831:
case 2988:
case 935:
case 851:
case 3839:
case 3951:
case 120:
case 1568:
case 732:
case 3790:
case 2596:
case 529:
case 1576:
case 2425:
case 3441:
case 1848:
case 1806:
case 2106:
case 1663:
case 3449:
case 3293:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746831602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,];
var gg_b = "1746831602/";

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
