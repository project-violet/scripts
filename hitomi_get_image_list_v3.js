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
case 763:
case 3549:
case 1114:
case 1569:
case 1510:
case 1641:
case 3620:
case 1101:
case 2247:
case 3661:
case 2430:
case 2481:
case 1450:
case 3323:
case 837:
case 1725:
case 3892:
case 826:
case 3276:
case 1134:
case 761:
case 4094:
case 3179:
case 302:
case 1824:
case 1346:
case 1809:
case 1530:
case 2046:
case 2550:
case 422:
case 988:
case 2154:
case 4076:
case 3294:
case 3086:
case 1605:
case 3013:
case 1854:
case 305:
case 2967:
case 1489:
case 2109:
case 2124:
case 2206:
case 2834:
case 425:
case 333:
case 894:
case 2520:
case 3033:
case 359:
case 1678:
case 3784:
case 3848:
case 596:
case 1575:
case 1868:
case 1755:
case 4087:
case 2007:
case 331:
case 3493:
case 2814:
case 1307:
case 1420:
case 59:
case 2879:
case 1885:
case 777:
case 2386:
case 3854:
case 3508:
case 2313:
case 699:
case 1086:
case 3605:
case 235:
case 1165:
case 3489:
case 1922:
case 755:
case 492:
case 3994:
case 3307:
case 3420:
case 1353:
case 1441:
case 3755:
case 685:
case 1493:
case 1650:
case 2681:
case 159:
case 2192:
case 3976:
case 3575:
case 594:
case 3678:
case 709:
case 800:
case 2148:
case 4022:
case 2023:
case 3725:
case 3450:
case 1478:
case 495:
case 824:
case 1892:
case 613:
case 2377:
case 2764:
case 1077:
case 1871:
case 2267:
case 3510:
case 3641:
case 1405:
case 3581:
case 2865:
case 2578:
case 1689:
case 489:
case 2449:
case 537:
case 3987:
case 960:
case 3809:
case 232:
case 3530:
case 2185:
case 914:
case 2758:
case 1244:
case 3767:
case 2117:
case 1626:
case 3502:
case 3374:
case 3396:
case 2225:
case 1059:
case 4064:
case 1842:
case 2019:
case 2827:
case 1319:
case 1270:
case 720:
case 1360:
case 2021:
case 2137:
case 1321:
case 3103:
case 637:
case 3691:
case 1663:
case 1157:
case 1873:
case 3643:
case 1599:
case 626:
case 1215:
case 1964:
case 24:
case 473:
case 1443:
case 2380:
case 3228:
case 1491:
case 3463:
case 993:
case 599:
case 704:
case 1898:
case 1472:
case 2602:
case 356:
case 2616:
case 1127:
case 154:
case 4028:
case 2142:
case 2752:
case 2543:
case 471:
case 168:
case 2591:
case 3970:
case 585:
case 1958:
case 991:
case 70:
case 2329:
case 2997:
case 1817:
case 2938:
case 117:
case 2255:
case 3426:
case 2311:
case 3195:
case 706:
case 3472:
case 3898:
case 3127:
case 2200:
case 3031:
case 2526:
case 3712:
case 156:
case 1944:
case 3215:
case 3964:
case 3351:
case 3443:
case 600:
case 2882:
case 3817:
case 317:
case 3029:
case 3004:
case 4035:
case 696:
case 3011:
case 1195:
case 1426:
case 899:
case 1970:
case 790:
case 3656:
case 35:
case 2787:
case 2699:
case 3958:
case 1456:
case 2096:
case 148:
case 486:
case 3928:
case 3244:
case 2895:
case 1915:
case 1264:
case 3339:
case 3747:
case 210:
case 418:
case 3626:
case 1583:
case 1374:
case 2436:
case 264:
case 923:
case 2297:
case 1643:
case 2556:
case 1182:
case 1103:
case 258:
case 450:
case 1691:
case 3663:
case 4070:
case 2794:
case 2955:
case 3599:
case 624:
case 3270:
case 3842:
case 2776:
case 1340:
case 3321:
case 2416:
case 3360:
case 1536:
case 3849:
case 223:
case 2685:
case 2588:
case 3306:
case 2990:
case 2424:
case 3634:
case 1189:
case 661:
case 1445:
case 3592:
case 3977:
case 3465:
case 125:
case 3141:
case 1120:
case 2253:
case 3332:
case 3193:
case 1161:
case 3601:
case 221:
case 1830:
case 1881:
case 2850:
case 2946:
case 3052:
case 2545:
case 1087:
case 958:
case 1233:
case 2648:
case 1808:
case 2223:
case 2692:
case 1150:
case 2181:
case 3688:
case 3347:
case 2067:
case 1401:
case 3585:
case 3022:
case 3913:
case 1414:
case 2671:
case 2820:
case 395:
case 2907:
case 778:
case 389:
case 3548:
case 3105:
case 2889:
case 1568:
case 122:
case 1740:
case 2501:
case 506:
case 3760:
case 2110:
case 1076:
case 80:
case 2376:
case 2514:
case 3367:
case 2047:
case 1022:
case 2579:
case 1347:
case 1688:
case 3774:
case 3414:
case 1986:
case 609:
case 2893:
case 3277:
case 3554:
case 1178:
case 50:
case 3150:
case 2290:
case 2246:
case 2485:
case 1721:
case 504:
case 799:
case 1933:
case 2149:
case 1719:
case 655:
case 3434:
case 189:
case 641:
case 2953:
case 1645:
case 402:
case 652:
case 2654:
case 2780:
case 325:
case 433:
case 1751:
case 219:
case 1592:
case 3286:
case 1312:
case 966:
case 405:
case 520:
case 1306:
case 4013:
case 1849:
case 987:
case 1634:
case 3810:
case 3881:
case 192:
case 2352:
case 2492:
case 782:
case 3161:
case 3488:
case 459:
case 1601:
case 2711:
case 4033:
case 1141:
case 3120:
case 2729:
case 3524:
case 1300:
case 3231:
case 173:
case 2000:
case 4080:
case 552:
case 1172:
case 3802:
case 726:
case 620:
case 863:
case 3015:
case 2786:
case 2328:
case 2713:
case 1682:
case 1603:
case 1143:
case 21:
case 3280:
case 3707:
case 45:
case 214:
case 2527:
case 1753:
case 3355:
case 3126:
case 147:
case 861:
case 2084:
case 417:
case 4029:
case 1573:
case 4011:
case 3035:
case 509:
case 3790:
case 794:
case 2296:
case 318:
case 1318:
case 1598:
case 2274:
case 4059:
case 386:
case 60:
case 2364:
case 1980:
case 604:
case 18:
case 2891:
case 1338:
case 2097:
case 3482:
case 3403:
case 541:
case 1058:
case 1766:
case 350:
case 2498:
case 3627:
case 3746:
case 3070:
case 3695:
case 2136:
case 3598:
case 448:
case 240:
case 3537:
case 167:
case 3980:
case 2344:
case 186:
case 841:
case 3931:
case 2582:
case 3318:
case 796:
case 118:
case 2260:
case 2642:
case 1627:
case 3766:
case 3058:
case 2183:
case 1070:
case 809:
case 2219:
case 606:
case 3911:
case 2863:
case 843:
case 2673:
case 38:
case 3457:
case 1403:
case 1482:
case 3904:
case 3397:
case 3028:
case 1280:
case 2251:
case 1015:
case 3603:
case 3682:
case 2698:
case 2637:
case 1231:
case 1883:
case 1802:
case 2996:
case 1816:
case 3172:
case 3573:
case 72:
case 480:
case 288:
case 969:
case 1126:
case 1211:
case 1495:
case 1707:
case 3542:
case 2055:
case 563:
case 3753:
case 347:
case 1759:
case 651:
case 2178:
case 1290:
case 827:
case 1448:
case 3181:
case 3067:
case 3130:
case 783:
case 954:
case 2585:
case 4023:
case 3534:
case 3671:
case 3820:
case 3907:
case 3394:
case 3454:
case 289:
case 4066:
case 2105:
case 2548:
case 432:
case 3889:
case 2721:
case 3266:
case 3110:
case 1246:
case 2719:
case 1609:
case 3169:
case 3376:
case 1624:
case 435:
case 3588:
case 3990:
case 3409:
case 1923:
case 1654:
case 119:
case 2465:
case 2751:
case 1207:
case 3253:
case 2332:
case 1032:
case 2614:
case 1704:
case 1471:
case 1729:
case 3850:
case 1966:
case 715:
case 77:
case 2052:
case 4053:
case 1492:
case 1668:
case 1352:
case 1565:
case 401:
case 597:
case 3648:
case 670:
case 3805:
case 2189:
case 508:
case 2445:
case 2213:
case 2869:
case 1588:
case 3731:
case 2679:
case 776:
case 897:
case 1990:
case 1946:
case 3966:
case 2233:
case 3878:
case 1648:
case 1387:
case 2087:
case 3668:
case 4007:
case 2488:
case 3711:
case 665:
case 2509:
case 3471:
case 2524:
case 3047:
case 1067:
case 1130:
case 956:
case 2401:
case 3322:
case 2414:
case 2277:
case 2554:
case 2808:
case 393:
case 662:
case 1223:
case 1181:
case 2150:
case 3448:
case 1110:
case 3485:
case 3246:
case 469:
case 2740:
case 536:
case 1501:
case 1266:
case 3149:
case 527:
case 980:
case 3609:
case 391:
case 1394:
case 1907:
case 2665:
case 2259:
case 853:
case 2156:
case 2790:
case 4074:
case 3018:
case 2325:
case 3557:
case 218:
case 3296:
case 1503:
case 1025:
case 562:
case 140:
case 3274:
case 3417:
case 1344:
case 267:
case 2044:
case 1239:
case 636:
case 1673:
case 3843:
case 1863:
case 851:
case 4040:
case 3097:
case 2403:
case 627:
case 1116:
case 1221:
case 1183:
case 1102:
case 3437:
case 1642:
case 46:
case 2627:
case 2746:
case 3358:
case 1219:
case 730:
case 2231:
case 3442:
case 3000:
case 1462:
case 1637:
case 1698:
case 2802:
case 1996:
case 1974:
case 3473:
case 3786:
case 2015:
case 2707:
case 2495:
case 3527:
case 798:
case 2126:
case 2836:
case 1940:
case 188:
case 3921:
case 1856:
case 446:
case 2035:
case 2028:
case 11:
case 3315:
case 175:
case 1939:
case 1328:
case 2191:
case 1000:
case 3637:
case 3698:
case 3595:
case 44:
case 1442:
case 2300:
case 3996:
case 157:
case 2172:
case 2573:
case 2384:
case 1921:
case 779:
case 870:
case 2899:
case 1919:
case 542:
case 2542:
case 3617:
case 114:
case 2753:
case 340:
case 1274:
case 1364:
case 3239:
case 1951:
case 3826:
case 63:
case 3344:
case 2064:
case 1777:
case 4039:
case 1199:
case 2931:
case 2723:
case 905:
case 3582:
case 545:
case 1018:
case 1872:
case 1662:
case 1437:
case 2766:
case 3863:
case 3673:
case 28:
case 1097:
case 1038:
case 4060:
case 4021:
case 681:
case 4006:
case 2086:
case 2013:
case 2165:
case 135:
case 528:
case 205:
case 3967:
case 1947:
case 2922:
case 1669:
case 3124:
case 2885:
case 1879:
case 3212:
case 3834:
case 419:
case 1610:
case 2700:
case 233:
case 3520:
case 4032:
case 3408:
case 1192:
case 683:
case 98:
case 612:
case 2784:
case 3589:
case 739:
case 3801:
case 1171:
case 2493:
case 1053:
case 3814:
case 101:
case 2353:
case 3232:
case 1764:
case 2549:
case 493:
case 67:
case 742:
case 1267:
case 2871:
case 2620:
case 3247:
case 3430:
case 2661:
case 579:
case 3168:
case 3481:
case 2718:
case 1023:
case 1148:
case 1912:
case 2892:
case 1906:
case 947:
case 3469:
case 507:
case 2179:
case 202:
case 1185:
case 1758:
case 971:
case 2366:
case 3046:
case 898:
case 3550:
case 2405:
case 674:
case 3845:
case 3154:
case 2294:
case 1865:
case 2390:
case 3148:
case 2450:
case 1168:
case 1481:
case 1090:
case 3608:
case 3906:
case 1744:
case 1888:
case 598:
case 3764:
case 1247:
case 1430:
case 2693:
case 2510:
case 2641:
case 1550:
case 1154:
case 1469:
case 770:
case 1770:
case 879:
case 3449:
case 3185:
case 2346:
case 3066:
case 1124:
case 1649:
case 3879:
case 3669:
case 3541:
case 1212:
case 303:
case 530:
case 3593:
case 918:
case 2854:
case 3313:
case 2508:
case 1715:
case 2605:
case 335:
case 2489:
case 1967:
case 828:
case 762:
case 1801:
case 2307:
case 1814:
case 301:
case 950:
case 2755:
case 3681:
case 3192:
case 2976:
case 2868:
case 1589:
case 3380:
case 34:
case 2228:
case 3173:
case 1882:
case 1803:
case 812:
case 1925:
case 3602:
case 3616:
case 1200:
case 3752:
case 881:
case 1563:
case 3591:
case 1284:
case 1699:
case 3:
case 3329:
case 3572:
case 2426:
case 3255:
case 3311:
case 922:
case 344:
case 2915:
case 1895:
case 387:
case 1074:
case 3117:
case 2583:
case 3722:
case 2516:
case 248:
case 440:
case 2396:
case 925:
case 698:
case 1096:
case 2456:
case 3900:
case 3359:
case 874:
case 1776:
case 3827:
case 87:
case 2672:
case 2935:
case 2536:
case 3021:
case 1040:
case 3984:
case 3137:
case 1402:
case 1416:
case 2182:
case 2643:
case 1955:
case 708:
case 1794:
case 57:
case 3096:
case 1225:
case 515:
case 3218:
case 1900:
case 1499:
case 876:
case 2928:
case 1039:
case 679:
case 3895:
case 2747:
case 3436:
case 3074:
case 364:
case 1117:
case 3238:
case 2873:
case 3556:
case 36:
case 607:
case 472:
case 992:
case 1019:
case 3776:
case 1827:
case 2321:
case 1137:
case 1198:
case 1060:
case 3416:
case 4038:
case 2360:
case 995:
case 3925:
case 2472:
case 734:
case 581:
case 2898:
case 2837:
case 3200:
case 475:
case 1331:
case 1142:
case 254:
case 1602:
case 1051:
case 2964:
case 2443:
case 3803:
case 3882:
case 1173:
case 457:
case 2817:
case 1938:
case 1997:
case 217:
case 1572:
case 1329:
case 512:
case 1255:
case 1311:
case 460:
case 268:
case 1752:
case 25:
case 2656:
case 3787:
case 989:
case 1:
case 2958:
case 1684:
case 3778:
case 3418:
case 4036:
case 2781:
case 1196:
case 3829:
case 2730:
case 3655:
case 100:
case 3804:
case 2963:
case 859:
case 1570:
case 833:
case 718:
case 2082:
case 2525:
case 2003:
case 3705:
case 4016:
case 3438:
case 1382:
case 3357:
case 1140:
case 3216:
case 786:
case 3283:
case 3202:
case 3098:
case 3160:
case 2710:
case 767:
case 805:
case 1544:
case 3564:
case 3831:
case 2658:
case 3400:
case 1062:
case 2956:
case 648:
case 2775:
case 3073:
case 12:
case 1638:
case 3151:
case 1395:
case 1761:
case 3793:
case 326:
case 2095:
case 2664:
case 337:
case 2896:
case 1916:
case 1983:
case 3484:
case 1618:
case 3528:
case 965:
case 1515:
case 3859:
case 406:
case 2584:
case 3789:
case 1073:
case 3638:
case 2180:
case 279:
case 2263:
case 1327:
case 747:
case 3062:
case 1400:
case 2821:
case 1484:
case 3916:
case 3902:
case 3515:
case 1859:
case 3618:
case 126:
case 2226:
case 2111:
case 1741:
case 2839:
case 502:
case 2129:
case 207:
case 2104:
case 137:
case 533:
case 300:
case 2317:
case 1829:
case 951:
case 3174:
case 1655:
case 1139:
case 1811:
case 3570:
case 3299:
case 1418:
case 505:
case 939:
case 420:
case 3750:
case 3196:
case 2256:
case 78:
case 3425:
case 2538:
case 1160:
case 953:
case 1098:
case 784:
case 1037:
case 2458:
case 3600:
case 3140:
case 1121:
case 2337:
case 1202:
case 1283:
case 531:
case 1564:
case 3544:
case 396:
case 1880:
case 2851:
case 3382:
case 3303:
case 2615:
case 3594:
case 1833:
case 2799:
case 3190:
case 93:
case 789:
case 1123:
case 2422:
case 3975:
case 1447:
case 3632:
case 281:
case 199:
case 2177:
case 605:
case 3314:
case 185:
case 2941:
case 2993:
case 4049:
case 55:
case 1085:
case 2547:
case 2385:
case 1379:
case 3146:
case 3334:
case 283:
case 3249:
case 2532:
case 2978:
case 409:
case 1406:
case 1412:
case 3981:
case 2694:
case 2186:
case 1791:
case 792:
case 2065:
case 3345:
case 3587:
case 443:
case 27:
case 215:
case 1552:
case 3107:
case 1153:
case 2506:
case 2261:
case 3647:
case 111:
case 2905:
case 2371:
case 1071:
case 602:
case 2823:
case 477:
case 3910:
case 2392:
case 1092:
case 3275:
case 1930:
case 3743:
case 2045:
case 3552:
case 129:
case 1763:
case 1345:
case 3406:
case 313:
case 382:
case 3772:
case 2324:
case 2487:
case 3092:
case 1726:
case 311:
case 3432:
case 2241:
case 1107:
case 4008:
case 2001:
case 4081:
case 1467:
case 1975:
case 556:
case 3447:
case 85:
case 2807:
case 1576:
case 1314:
case 868:
case 2278:
case 1594:
case 3833:
case 2368:
case 3048:
case 461:
case 817:
case 1068:
case 4030:
case 2652:
case 3379:
case 3210:
case 1146:
case 2567:
case 3522:
case 1606:
case 2716:
case 1612:
case 2783:
case 3166:
case 1334:
case 1908:
case 3813:
case 3886:
case 2920:
case 854:
case 385:
case 4069:
case 4010:
case 2205:
case 2115:
case 2063:
case 3343:
case 3451:
case 686:
case 667:
case 30:
case 190:
case 3372:
case 3858:
case 1870:
case 3511:
case 3640:
case 3100:
case 2227:
case 1660:
case 895:
case 424:
case 3696:
case 2825:
case 2659:
case 650:
case 3937:
case 3998:
case 227:
case 522:
case 236:
case 3674:
case 1155:
case 1844:
case 3864:
case 3439:
case 1714:
case 2144:
case 2629:
case 3973:
case 1217:
case 1474:
case 2611:
case 892:
case 1496:
case 2056:
case 208:
case 400:
case 3099:
case 496:
case 3419:
case 1016:
case 2631:
case 1002:
case 2316:
case 3421:
case 2383:
case 1440:
case 3138:
case 1651:
case 3197:
case 3559:
case 2995:
case 1815:
case 915:
case 3356:
case 2748:
case 3496:
case 338:
case 1118:
case 2927:
case 1942:
case 673:
case 3962:
case 1439:
case 3474:
case 2521:
case 2560:
case 3217:
case 297:
case 2282:
case 647:
case 2203:
case 1559:
case 3815:
case 3734:
case 825:
case 2539:
case 3298:
case 1421:
case 3440:
case 2785:
case 3002:
case 595:
case 4073:
case 2072:
case 1529:
case 981:
case 717:
case 3242:
case 3660:
case 2431:
case 3621:
case 2043:
case 4042:
case 3363:
case 684:
case 2091:
case 1343:
case 23:
case 1765:
case 390:
case 768:
case 75:
case 3273:
case 2838:
case 1917:
case 3639:
case 754:
case 983:
case 2771:
case 2404:
case 2957:
case 234:
case 2295:
case 104:
case 3155:
case 3326:
case 3788:
case 437:
case 109:
case 245:
case 1533:
case 239:
case 2413:
case 928:
case 695:
case 2486:
case 3075:
case 2773:
case 3389:
case 482:
case 3968:
case 1224:
case 584:
case 3666:
case 251:
case 1106:
case 1646:
case 1727:
case 2742:
case 155:
case 2152:
case 1513:
case 3292:
case 3623:
case 2979:
case 1985:
case 58:
case 705:
case 4071:
case 818:
case 2847:
case 3271:
case 733:
case 1393:
case 2288:
case 2093:
case 4092:
case 2477:
case 3030:
case 3653:
case 573:
case 2717:
case 1607:
case 2201:
case 1147:
case 2122:
case 4048:
case 152:
case 1268:
case 3909:
case 979:
case 3924:
case 3490:
case 2078:
case 3887:
case 1378:
case 547:
case 2349:
case 3069:
case 2806:
case 907:
case 2812:
case 3446:
case 692:
case 3285:
case 363:
case 2737:
case 1466:
case 2798:
case 571:
case 3010:
case 2005:
case 4085:
case 1971:
case 2050:
case 1490:
case 847:
case 3268:
case 1350:
case 1909:
case 2381:
case 1887:
case 3852:
case 3378:
case 871:
case 2330:
case 3147:
case 478:
case 1653:
case 1167:
case 265:
case 2590:
case 3971:
case 1703:
case 2686:
case 3757:
case 3254:
case 3049:
case 1069:
case 2279:
case 2310:
case 3948:
case 1968:
case 3209:
case 343:
case 2507:
case 3112:
case 1666:
case 930:
case 429:
case 3106:
case 518:
case 2265:
case 3533:
case 2375:
case 1389:
case 4024:
case 1075:
case 2089:
case 4009:
case 1271:
case 2677:
case 3341:
case 3453:
case 1407:
case 1795:
case 3132:
case 341:
case 1361:
case 2020:
case 550:
case 1954:
case 2308:
case 3513:
case 884:
case 355:
case 1008:
case 3690:
case 622:
case 3604:
case 3629:
case 3144:
case 1519:
case 2973:
case 1560:
case 913:
case 428:
case 3611:
case 1521:
case 3540:
case 3768:
case 1884:
case 308:
case 821:
case 1927:
case 1459:
case 2099:
case 1539:
case 3170:
case 2419:
case 2779:
case 3631:
case 3316:
case 3383:
case 3302:
case 1282:
case 3257:
case 197:
case 3754:
case 2343:
case 1091:
case 2765:
case 20:
case 2391:
case 1838:
case 1897:
case 2529:
case 3709:
case 2858:
case 2372:
case 2504:
case 479:
case 2262:
case 2100:
case 1431:
case 2580:
case 1551:
case 2696:
case 3135:
case 672:
case 74:
case 985:
case 2184:
case 3659:
case 2998:
case 1818:
case 407:
case 591:
case 327:
case 2674:
case 204:
case 134:
case 2864:
case 3026:
case 1295:
case 1724:
case 746:
case 3072:
case 2619:
case 1227:
case 2870:
case 2621:
case 978:
case 3043:
case 2363:
case 2745:
case 33:
case 1063:
case 1115:
case 290:
case 498:
case 3838:
case 3897:
case 2273:
case 2639:
case 3771:
case 1982:
case 1903:
case 3429:
case 3957:
case 334:
case 3295:
case 893:
case 1026:
case 2155:
case 2844:
case 2788:
case 4095:
case 1135:
case 3792:
case 3551:
case 2356:
case 3884:
case 108:
case 2125:
case 1056:
case 430:
case 3927:
case 758:
case 3399:
case 1144:
case 3519:
case 2714:
case 1611:
case 2474:
case 2036:
case 3521:
case 1336:
case 2651:
case 397:
case 3203:
case 1257:
case 1995:
case 1754:
case 1170:
case 819:
case 710:
case 764:
case 3539:
case 1574:
case 1316:
case 1383:
case 3785:
case 688:
case 2016:
case 2083:
case 4082:
case 2002:
case 4003:
case 3158:
case 2167:
case 1546:
case 2030:
case 2653:
case 3717:
case 261:
case 3566:
case 170:
case 3122:
case 2909:
case 1381:
case 2350:
case 2248:
case 2490:
case 1050:
case 92:
case 860:
case 4014:
case 3078:
case 2887:
case 814:
case 1176:
case 875:
case 3234:
case 3806:
case 3812:
case 2285:
case 1310:
case 263:
case 516:
case 2010:
case 342:
case 1613:
case 2782:
case 1686:
case 857:
case 588:
case 1988:
case 4034:
case 621:
case 1265:
case 3413:
case 3486:
case 1089:
case 2075:
case 1901:
case 2389:
case 1375:
case 351:
case 162:
case 1762:
case 1507:
case 900:
case 2008:
case 3433:
case 1187:
case 476:
case 2292:
case 996:
case 1677:
case 1867:
case 1020:
case 3288:
case 2320:
case 2407:
case 353:
case 2795:
case 2727:
case 1553:
case 243:
case 1742:
case 151:
case 693:
case 4065:
case 362:
case 2106:
case 3762:
case 139:
case 145:
case 3265:
case 3901:
case 3867:
case 2822:
case 3677:
case 1847:
case 703:
case 2341:
case 3061:
case 1093:
case 691:
case 153:
case 3020:
case 572:
case 241:
case 2393:
case 1041:
case 3934:
case 3308:
case 2586:
case 1152:
case 255:
case 1433:
case 749:
case 2985:
case 1979:
case 994:
case 575:
case 3050:
case 3381:
case 2852:
case 816:
case 1078:
case 732:
case 619:
case 2147:
case 1122:
case 1717:
case 365:
case 2971:
case 412:
case 2254:
case 1234:
case 2577:
case 2992:
case 2049:
case 937:
case 1798:
case 2466:
case 1737:
case 560:
case 514:
case 3310:
case 3658:
case 1131:
case 2400:
case 4091:
case 1027:
case 2999:
case 3555:
case 1819:
case 3956:
case 869:
case 3840:
case 687:
case 3775:
case 4072:
case 2073:
case 1584:
case 666:
case 3291:
case 1263:
case 179:
case 1428:
case 2151:
case 1839:
case 2741:
case 1500:
case 532:
case 226:
case 3095:
case 1104:
case 237:
case 3664:
case 107:
case 1644:
case 3896:
case 775:
case 2484:
case 71:
case 2528:
case 2625:
case 2859:
case 434:
case 1159:
case 2778:
case 1256:
case 535:
case 909:
case 549:
case 3781:
case 2829:
case 503:
case 2655:
case 2017:
case 943:
case 2558:
case 2804:
case 2236:
case 1943:
case 1464:
case 1851:
case 2880:
case 3525:
case 2438:
case 1615:
case 2497:
case 3628:
case 1337:
case 1398:
case 2202:
case 497:
case 2037:
case 2098:
case 2160:
case 6:
case 501:
case 3470:
case 3769:
case 1749:
case 2831:
case 408:
case 200:
case 1730:
case 3943:
case 3464:
case 2570:
case 1963:
case 2299:
case 2684:
case 3159:
case 2750:
case 2196:
case 328:
case 2425:
case 3972:
case 3538:
case 2600:
case 3398:
case 2140:
case 3749:
case 849:
case 1470:
case 1769:
case 2544:
case 296:
case 803:
case 3851:
case 646:
case 2382:
case 1628:
case 1003:
case 1082:
case 3615:
case 3373:
case 2936:
case 1775:
case 664:
case 1243:
case 22:
case 2697:
case 1415:
case 2535:
case 1291:
case 3027:
case 1555:
case 3131:
case 3670:
case 1840:
case 716:
case 198:
case 1956:
case 3860:
case 2916:
case 1896:
case 1435:
case 436:
case 2761:
case 3111:
case 2455:
case 3839:
case 224:
case 2720:
case 1874:
case 510:
case 1324:
case 4089:
case 2009:
case 3866:
case 1950:
case 3694:
case 229:
case 3113:
case 3065:
case 2345:
case 374:
case 2107:
case 3220:
case 1088:
case 3261:
case 176:
case 2726:
case 3512:
case 669:
case 3905:
case 866:
case 2910:
case 558:
case 3392:
case 1487:
case 3133:
case 2594:
case 990:
case 3687:
case 2190:
case 1368:
case 278:
case 2975:
case 2301:
case 2632:
case 4050:
case 1001:
case 1736:
case 381:
case 2314:
case 2576:
case 3941:
case 2054:
case 1354:
case 1205:
case 312:
case 3079:
case 2606:
case 546:
case 2612:
case 465:
case 2146:
case 906:
case 2908:
case 383:
case 2249:
case 3989:
case 3807:
case 649:
case 4078:
case 635:
case 1799:
case 603:
case 3278:
case 2123:
case 3368:
case 1250:
case 90:
case 1348:
case 2379:
case 1385:
case 3567:
case 2210:
case 112:
case 2522:
case 2166:
case 3702:
case 3783:
case 3961:
case 2813:
case 2886:
case 3354:
case 601:
case 5:
case 285:
case 3494:
case 442:
case 793:
case 2743:
case 17:
case 2365:
case 2552:
case 2791:
case 1186:
case 1065:
case 920:
case 439:
case 2412:
case 587:
case 213:
case 1978:
case 282:
case 858:
case 2772:
case 86:
case 1676:
case 864:
case 719:
case 1823:
case 3487:
case 2949:
case 4093:
case 2092:
case 1392:
case 376:
case 2877:
case 3293:
case 1261:
case 1506:
case 3622:
case 3241:
case 2667:
case 1905:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748959202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,];
var gg_b = "1748959202/";

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
