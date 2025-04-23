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
case 510:
case 3473:
case 262:
case 2171:
case 4011:
case 357:
case 2974:
case 495:
case 847:
case 3545:
case 2114:
case 3405:
case 276:
case 880:
case 691:
case 446:
case 3875:
case 617:
case 920:
case 2017:
case 3803:
case 1005:
case 3382:
case 3699:
case 1199:
case 2600:
case 373:
case 2774:
case 475:
case 1545:
case 2198:
case 3521:
case 703:
case 2614:
case 406:
case 560:
case 768:
case 2268:
case 2582:
case 2417:
case 2711:
case 2553:
case 971:
case 2587:
case 3005:
case 237:
case 3073:
case 671:
case 667:
case 30:
case 2416:
case 2102:
case 1386:
case 4089:
case 2158:
case 479:
case 2335:
case 183:
case 3659:
case 1159:
case 501:
case 3788:
case 1535:
case 194:
case 14:
case 1115:
case 704:
case 2565:
case 374:
case 2277:
case 2107:
case 2428:
case 2249:
case 3703:
case 1248:
case 2586:
case 1429:
case 3988:
case 2789:
case 2658:
case 839:
case 2028:
case 485:
case 3159:
case 499:
case 422:
case 1788:
case 750:
case 79:
case 209:
case 3393:
case 981:
case 2607:
case 1703:
case 3248:
case 3429:
case 1380:
case 1615:
case 2016:
case 394:
case 430:
case 34:
case 1775:
case 2410:
case 85:
case 1008:
case 3483:
case 717:
case 3751:
case 583:
case 1762:
case 452:
case 3457:
case 3090:
case 101:
case 2009:
case 2732:
case 791:
case 3024:
case 643:
case 3654:
case 358:
case 2984:
case 3349:
case 1860:
case 3061:
case 3122:
case 1622:
case 3548:
case 1627:
case 813:
case 68:
case 3408:
case 3127:
case 1096:
case 732:
case 3885:
case 851:
case 1083:
case 618:
case 3967:
case 594:
case 2663:
case 1767:
case 3235:
case 3452:
case 1461:
case 98:
case 2244:
case 1633:
case 2031:
case 1024:
case 1654:
case 2879:
case 2784:
case 4046:
case 1122:
case 1061:
case 3622:
case 3052:
case 1878:
case 1377:
case 771:
case 1496:
case 1751:
case 3762:
case 767:
case 2572:
case 2681:
case 1962:
case 2847:
case 2163:
case 968:
case 2577:
case 1866:
case 574:
case 1452:
case 1372:
case 1513:
case 3633:
case 3627:
case 1548:
case 2286:
case 1408:
case 1127:
case 3083:
case 2409:
case 903:
case 141:
case 3490:
case 1143:
case 1050:
case 3643:
case 3120:
case 2947:
case 3221:
case 2425:
case 2832:
case 1497:
case 4079:
case 1376:
case 1978:
case 360:
case 2282:
case 2568:
case 110:
case 1760:
case 3618:
case 1118:
case 2979:
case 864:
case 4036:
case 1339:
case 3785:
case 3450:
case 2155:
case 3097:
case 1985:
case 4042:
case 1126:
case 3056:
case 2823:
case 2837:
case 1492:
case 1966:
case 1867:
case 2942:
case 2576:
case 1092:
case 310:
case 2570:
case 1960:
case 2884:
case 1618:
case 3118:
case 1778:
case 781:
case 3050:
case 3245:
case 1851:
case 3862:
case 1221:
case 3791:
case 3376:
case 950:
case 1766:
case 2742:
case 3867:
case 584:
case 1301:
case 2736:
case 1370:
case 3368:
case 1785:
case 1097:
case 2840:
case 644:
case 3126:
case 1056:
case 69:
case 2655:
case 2025:
case 650:
case 1663:
case 995:
case 2424:
case 3163:
case 549:
case 3937:
case 2083:
case 1695:
case 1940:
case 3195:
case 3293:
case 3923:
case 2627:
case 1723:
case 689:
case 3549:
case 1984:
case 417:
case 3879:
case 831:
case 1830:
case 3031:
case 4051:
case 2622:
case 491:
case 3784:
case 946:
case 1746:
case 2762:
case 3932:
case 2008:
case 1280:
case 1732:
case 1181:
case 201:
case 3313:
case 675:
case 3695:
case 2408:
case 1195:
case 1293:
case 1923:
case 2548:
case 1549:
case 866:
case 241:
case 1409:
case 3663:
case 2866:
case 3431:
case 1937:
case 1836:
case 606:
case 2513:
case 3746:
case 2483:
case 3732:
case 1847:
case 2962:
case 1681:
case 1313:
case 3984:
case 1348:
case 1879:
case 3830:
case 2024:
case 1031:
case 2878:
case 509:
case 2122:
case 1784:
case 3742:
case 979:
case 1837:
case 3736:
case 1942:
case 2339:
case 1338:
case 3655:
case 679:
case 1253:
case 2985:
case 1539:
case 3570:
case 3619:
case 210:
case 3779:
case 1282:
case 562:
case 1119:
case 3930:
case 2118:
case 2694:
case 2760:
case 4078:
case 2050:
case 3441:
case 2497:
case 1832:
case 576:
case 227:
case 685:
case 2785:
case 699:
case 2370:
case 1025:
case 3823:
case 1655:
case 2056:
case 3041:
case 7:
case 3155:
case 2097:
case 2766:
case 545:
case 537:
case 3837:
case 825:
case 2301:
case 999:
case 985:
case 2221:
case 1234:
case 3846:
case 4060:
case 2643:
case 1441:
case 3832:
case 3425:
case 512:
case 1570:
case 4091:
case 481:
case 2092:
case 1779:
case 3568:
case 3282:
case 1930:
case 2778:
case 3979:
case 2618:
case 1884:
case 3553:
case 3106:
case 1606:
case 2073:
case 952:
case 1364:
case 3345:
case 2334:
case 3600:
case 418:
case 1974:
case 1012:
case 2699:
case 3614:
case 1698:
case 48:
case 3198:
case 3774:
case 789:
case 795:
case 1911:
case 3711:
case 1171:
case 3239:
case 3671:
case 3268:
case 137:
case 1276:
case 3017:
case 1345:
case 2382:
case 3606:
case 362:
case 2473:
case 1600:
case 706:
case 2199:
case 3974:
case 257:
case 1889:
case 3100:
case 196:
case 2888:
case 3698:
case 3534:
case 1198:
case 3114:
case 293:
case 2545:
case 1774:
case 1249:
case 2903:
case 1586:
case 4075:
case 3544:
case 2213:
case 24:
case 4003:
case 294:
case 3016:
case 3410:
case 2975:
case 283:
case 3028:
case 3580:
case 3789:
case 1272:
case 1158:
case 1989:
case 47:
case 2159:
case 3874:
case 1416:
case 4088:
case 1010:
case 309:
case 3811:
case 2775:
case 1544:
case 1016:
case 2615:
case 859:
case 3277:
case 1410:
case 1607:
case 3004:
case 3416:
case 20:
case 3010:
case 3102:
case 785:
case 722:
case 3335:
case 1028:
case 444:
case 1658:
case 49:
case 2344:
case 3272:
case 3158:
case 450:
case 9:
case 3989:
case 2029:
case 3636:
case 2833:
case 809:
case 1516:
case 1136:
case 3065:
case 2166:
case 1329:
case 669:
case 3755:
case 1895:
case 239:
case 2257:
case 1955:
case 2185:
case 2926:
case 2178:
case 3504:
case 2794:
case 2918:
case 3231:
case 3719:
case 3130:
case 3679:
case 1465:
case 221:
case 1147:
case 1528:
case 566:
case 3881:
case 2529:
case 2304:
case 2726:
case 886:
case 440:
case 33:
case 1093:
case 2685:
case 926:
case 3044:
case 3863:
case 1065:
case 919:
case 2666:
case 3329:
case 3142:
case 516:
case 3147:
case 2290:
case 3528:
case 1881:
case 2743:
case 3486:
case 3493:
case 2678:
case 1444:
case 2160:
case 592:
case 1504:
case 2994:
case 1130:
case 1719:
case 487:
case 359:
case 1679:
case 1510:
case 2854:
case 3465:
case 270:
case 2667:
case 733:
case 1763:
case 3137:
case 2464:
case 3855:
case 1053:
case 436:
case 3640:
case 3225:
case 1795:
case 896:
case 942:
case 2954:
case 2722:
case 3684:
case 2894:
case 525:
case 3819:
case 1082:
case 3305:
case 4054:
case 3512:
case 207:
case 756:
case 3453:
case 1981:
case 2250:
case 2045:
case 2662:
case 3034:
case 642:
case 2820:
case 3623:
case 2297:
case 2826:
case 876:
case 1640:
case 1123:
case 2256:
case 1995:
case 3087:
case 665:
case 602:
case 2505:
case 3434:
case 4033:
case 2445:
case 902:
case 2573:
case 1963:
case 805:
case 862:
case 1517:
case 2933:
case 1373:
case 1512:
case 1487:
case 3632:
case 2064:
case 1132:
case 3981:
case 2317:
case 3646:
case 2162:
case 1034:
case 4022:
case 2021:
case 1146:
case 3184:
case 1684:
case 1819:
case 461:
case 2922:
case 2754:
case 280:
case 2103:
case 3541:
case 3401:
case 1525:
case 2915:
case 3470:
case 2469:
case 2273:
case 1898:
case 46:
case 1958:
case 2959:
case 1001:
case 1189:
case 3758:
case 3689:
case 2899:
case 3702:
case 2592:
case 769:
case 1902:
case 4059:
case 1476:
case 1397:
case 264:
case 1470:
case 3468:
case 1350:
case 2675:
case 2603:
case 934:
case 3525:
case 555:
case 423:
case 1871:
case 3902:
case 3356:
case 719:
case 3476:
case 2550:
case 2688:
case 2759:
case 41:
case 3001:
case 3212:
case 1758:
case 1689:
case 956:
case 2048:
case 53:
case 1706:
case 1324:
case 3807:
case 3906:
case 424:
case 3472:
case 331:
case 656:
case 3714:
case 1798:
case 166:
case 3674:
case 263:
case 3700:
case 838:
case 3449:
case 2590:
case 3858:
case 3509:
case 3998:
case 3383:
case 3611:
case 208:
case 1531:
case 2524:
case 1111:
case 715:
case 3771:
case 329:
case 1971:
case 172:
case 248:
case 1308:
case 1216:
case 2309:
case 3390:
case 2596:
case 1906:
case 1807:
case 1352:
case 3049:
case 702:
case 1611:
case 1477:
case 3531:
case 1802:
case 3111:
case 1771:
case 129:
case 372:
case 22:
case 2413:
case 2552:
case 3204:
case 366:
case 2999:
case 2229:
case 2859:
case 3900:
case 2448:
case 251:
case 3072:
case 478:
case 1509:
case 1228:
case 2070:
case 4058:
case 3341:
case 2476:
case 2902:
case 282:
case 3038:
case 3759:
case 2958:
case 1188:
case 3688:
case 3550:
case 469:
case 4007:
case 2468:
case 1273:
case 1438:
case 860:
case 1469:
case 3675:
case 3603:
case 2907:
case 1103:
case 1205:
case 2525:
case 600:
case 1597:
case 1759:
case 3188:
case 1688:
case 1550:
case 419:
case 2800:
case 2039:
case 2702:
case 1341:
case 426:
case 580:
case 3325:
case 1038:
case 535:
case 3103:
case 3556:
case 987:
case 2541:
case 314:
case 2470:
case 164:
case 1715:
case 3438:
case 3175:
case 2076:
case 3469:
case 936:
case 1524:
case 108:
case 3552:
case 1561:
case 3413:
case 2971:
case 2900:
case 3859:
case 415:
case 3229:
case 3999:
case 2798:
case 2914:
case 313:
case 1799:
case 4071:
case 351:
case 1590:
case 2077:
case 653:
case 348:
case 611:
case 858:
case 724:
case 1331:
case 2706:
case 997:
case 442:
case 2049:
case 911:
case 539:
case 1448:
case 465:
case 402:
case 216:
case 1999:
case 2998:
case 2228:
case 151:
case 3590:
case 2449:
case 363:
case 229:
case 292:
case 2802:
case 2611:
case 308:
case 2383:
case 1552:
case 3561:
case 570:
case 1413:
case 1583:
case 801:
case 1596:
case 3048:
case 1557:
case 2472:
case 2352:
case 2807:
case 2308:
case 661:
case 3013:
case 231:
case 4006:
case 1309:
case 1316:
case 1691:
case 1943:
case 2209:
case 2528:
case 3191:
case 2147:
case 3290:
case 3743:
case 1208:
case 1660:
case 508:
case 1435:
case 3160:
case 3678:
case 190:
case 23:
case 3304:
case 1827:
case 1296:
case 139:
case 96:
case 1328:
case 3035:
case 4055:
case 3660:
case 3794:
case 434:
case 1718:
case 3178:
case 3822:
case 1160:
case 1261:
case 170:
case 1854:
case 2679:
case 2719:
case 2130:
case 1994:
case 1224:
case 84:
case 3918:
case 3316:
case 2647:
case 1920:
case 321:
case 3720:
case 551:
case 1743:
case 3529:
case 513:
case 3208:
case 754:
case 828:
case 740:
case 1035:
case 3328:
case 548:
case 2636:
case 3166:
case 988:
case 1666:
case 923:
case 2755:
case 3926:
case 883:
case 1685:
case 1310:
case 3064:
case 2632:
case 107:
case 3162:
case 3021:
case 3651:
case 711:
case 3843:
case 1662:
case 1250:
case 2646:
case 2981:
case 1722:
case 2184:
case 884:
case 456:
case 380:
case 3292:
case 3922:
case 3754:
case 2082:
case 924:
case 2087:
case 3256:
case 347:
case 2241:
case 2053:
case 1464:
case 3927:
case 3826:
case 698:
case 3505:
case 2795:
case 1667:
case 3573:
case 3312:
case 3167:
case 736:
case 2637:
case 2684:
case 3894:
case 255:
case 1818:
case 3954:
case 3722:
case 2305:
case 1292:
case 2819:
case 2132:
case 2453:
case 2512:
case 307:
case 3820:
case 2146:
case 1843:
case 777:
case 3151:
case 1317:
case 3667:
case 4095:
case 1312:
case 1167:
case 3733:
case 1933:
case 2517:
case 2137:
case 2995:
case 4063:
case 2640:
case 135:
case 678:
case 3464:
case 1297:
case 1927:
case 3727:
case 873:
case 3421:
case 647:
case 2870:
case 72:
case 1340:
case 3869:
case 398:
case 202:
case 3323:
case 2584:
case 713:
case 587:
case 3337:
case 2098:
case 1551:
case 1099:
case 2612:
case 935:
case 2801:
case 2772:
case 492:
case 3913:
case 3346:
case 3173:
case 748:
case 1713:
case 1673:
case 3332:
case 2414:
case 817:
case 2006:
case 2400:
case 680:
case 3499:
case 2540:
case 2972:
case 2546:
case 1288:
case 2014:
case 2000:
case 2839:
case 2071:
case 378:
case 198:
case 215:
case 1838:
case 1323:
case 871:
case 2498:
case 3605:
case 1203:
case 1105:
case 3748:
case 907:
case 1948:
case 3384:
case 4077:
case 124:
case 2537:
case 2362:
case 607:
case 2876:
case 2977:
case 1567:
case 2770:
case 188:
case 2610:
case 2385:
case 1969:
case 3769:
case 3738:
case 2939:
case 1129:
case 1342:
case 2407:
case 4068:
case 2128:
case 123:
case 4039:
case 3591:
case 1566:
case 2877:
case 2976:
case 764:
case 1585:
case 1379:
case 3330:
case 1459:
case 1848:
case 670:
case 2458:
case 1629:
case 511:
case 2274:
case 553:
case 425:
case 3342:
case 2628:
case 3336:
case 4070:
case 2739:
case 2110:
case 2002:
case 2211:
case 269:
case 2768:
case 2530:
case 1769:
case 16:
case 2970:
case 1738:
case 1560:
case 639:
case 31:
case 881:
case 3379:
case 3459:
case 621:
case 990:
case 3347:
case 95:
case 714:
case 3813:
case 1015:
case 2391:
case 2616:
case 2776:
case 3945:
case 353:
case 2880:
case 161:
case 177:
case 1921:
case 1291:
case 2934:
case 2609:
case 311:
case 1190:
case 843:
case 3721:
case 1608:
case 1964:
case 455:
case 3108:
case 588:
case 3152:
case 780:
case 1260:
case 1161:
case 4034:
case 3054:
case 51:
case 948:
case 2230:
case 2787:
case 951:
case 2481:
case 3183:
case 3196:
case 1027:
case 3285:
case 1696:
case 62:
case 818:
case 1033:
case 88:
case 3266:
case 1374:
case 336:
case 2982:
case 1152:
case 3260:
case 3022:
case 3161:
case 2463:
case 1054:
case 1624:
case 2279:
case 153:
case 1945:
case 1690:
case 1764:
case 361:
case 4082:
case 2081:
case 377:
case 3921:
case 2247:
case 197:
case 3608:
case 2734:
case 3964:
case 1108:
case 3745:
case 1835:
case 3033:
case 3374:
case 2242:
case 136:
case 4087:
case 963:
case 608:
case 3657:
case 2953:
case 1196:
case 3027:
case 1285:
case 3311:
case 2987:
case 3696:
case 3683:
case 1157:
case 803:
case 1426:
case 3864:
case 2455:
case 187:
case 2375:
case 1262:
case 2246:
case 3821:
case 3150:
case 1845:
case 3043:
case 234:
case 3018:
case 964:
case 2303:
case 1192:
case 2125:
case 2641:
case 2986:
case 3697:
case 2887:
case 1156:
case 2853:
case 1443:
case 3420:
case 2744:
case 2965:
case 1267:
case 3735:
case 3494:
case 154:
case 2388:
case 2237:
case 1018:
case 2284:
case 100:
case 790:
case 2019:
case 1692:
case 598:
case 4080:
case 3426:
case 1864:
case 459:
case 3588:
case 3020:
case 2834:
case 1821:
case 721:
case 3575:
case 3267:
case 1735:
case 524:
case 3418:
case 1026:
case 739:
case 2625:
case 2141:
case 1656:
case 3197:
case 2055:
case 3443:
case 2786:
case 2793:
case 1420:
case 333:
case 2033:
case 616:
case 1063:
case 3242:
case 435:
case 2374:
case 1753:
case 1481:
case 692:
case 1095:
case 3987:
case 916:
case 2311:
case 3953:
case 2022:
case 4021:
case 2652:
case 2260:
case 3982:
case 1131:
case 3279:
case 4064:
case 2124:
case 755:
case 1511:
case 3463:
case 3247:
case 2190:
case 480:
case 526:
case 1934:
case 2291:
case 277:
case 261:
case 3109:
case 3081:
case 846:
case 1880:
case 1574:
case 2745:
case 356:
case 631:
case 3495:
case 806:
case 3787:
case 672:
case 3095:
case 1893:
case 1987:
case 2285:
case 1953:
case 2183:
case 666:
case 2422:
case 3844:
case 875:
case 3063:
case 2266:
case 1081:
case 2690:
case 3880:
case 2945:
case 253:
case 3574:
case 1734:
case 297:
case 156:
case 4045:
case 2433:
case 1982:
case 1279:
case 3230:
case 407:
case 1463:
case 1744:
case 3765:
case 1388:
case 2935:
case 254:
case 2197:
case 3240:
case 3055:
case 3625:
case 1887:
case 1986:
case 1125:
case 2503:
case 3786:
case 1882:
case 565:
case 502:
case 470:
case 1375:
case 287:
case 1589:
case 1780:
case 1232:
case 2426:
case 134:
case 3980:
case 3834:
case 2588:
case 2262:
case 2650:
case 1240:
case 3853:
case 2656:
case 1141:
case 2026:
case 3986:
case 2697:
case 3125:
case 3641:
case 2420:
case 2494:
case 925:
case 3744:
case 982:
case 3237:
case 542:
case 3388:
case 899:
case 3375:
case 3589:
case 3455:
case 2864:
case 3232:
case 2251:
case 334:
case 2150:
case 1980:
case 2821:
case 45:
case 2018:
case 759:
case 515:
case 2692:
case 200:
case 3303:
case 421:
case 2748:
case 3949:
case 1006:
case 3498:
case 655:
case 1414:
case 1749:
case 1471:
case 3537:
case 731:
case 852:
case 3117:
case 955:
case 3977:
case 2713:
case 1098:
case 3972:
case 1772:
case 3000:
case 3112:
case 534:
case 716:
case 2099:
case 278:
case 3868:
case 451:
case 3839:
case 1584:
case 165:
case 315:
case 792:
case 2340:
case 2346:
case 3471:
case 2913:
case 3351:
case 224:
case 2567:
case 1876:
case 142:
case 3006:
case 3540:
case 2499:
case 2948:
case 1523:
case 772:
case 3870:
case 1839:
case 3584:
case 365:
case 2323:
case 1406:
case 1014:
case 2288:
case 1289:
case 1000:
case 1112:
case 408:
case 1458:
case 464:
case 1849:
case 3360:
case 1976:
case 1877:
case 1116:
case 3776:
case 3616:
case 2347:
case 1536:
case 1366:
case 3274:
case 2129:
case 126:
case 3058:
case 1701:
case 3628:
case 3530:
case 1385:
case 1610:
case 369:
case 1579:
case 3768:
case 2938:
case 1770:
case 3211:
case 3002:
case 3110:
case 3739:
case 2415:
case 21:
case 1939:
case 1604:
case 3116:
case 1776:
case 1391:
case 2015:
case 2330:
case 1007:
case 1360:
case 1530:
case 3385:
case 1768:
case 169:
case 782:
case 3579:
case 1739:
case 725:
case 3604:
case 2738:
case 1970:
case 1104:
case 556:
case 1628:
case 3701:
case 3407:
case 3665:
case 3042:
case 1479:
case 4056:
case 1359:
case 1263:
case 909:
case 1165:
case 869:
case 2515:
case 3144:
case 2233:
case 2135:
case 2896:
case 3686:
case 2227:
case 1186:
case 2302:
case 2956:
case 1:
case 2857:
case 1193:
case 3725:
case 1447:
case 1741:
case 1507:
case 1502:
case 1030:
case 575:
case 3079:
case 1442:
case 2307:
case 1436:
case 2559:
case 2808:
case 2750:
case 1809:
case 4092:
case 1558:
case 1680:
case 1315:
case 3047:
case 3925:
case 3295:
case 986:
case 3186:
case 3193:
case 2491:
case 2756:
case 546:
case 1725:
case 3447:
case 2797:
case 1430:
case 1665:
case 3479:
case 2460:
case 1036:
case 2635:
case 1144:
case 819:
case 1180:
case 3809:
case 3315:
case 1047:
case 427:
case 2792:
case 2254:
case 949:
case 3030:
case 1831:
case 2824:
case 2078:
case 2861:
case 3436:
case 589:
case 696:
case 815:
case 1484:
case 2300:
case 2067:
case 3399:
case 3506:
case 2783:
case 2451:
case 2796:
case 2371:
case 3446:
case 530:
case 1653:
case 1023:
case 3255:
case 4090:
case 1571:
case 1682:
case 3731:
case 1931:
case 352:
case 1046:
case 1134:
case 2062:
case 2990:
case 3634:
case 2708:
case 3598:
case 1514:
case 4024:
case 1032:
case 1709:
case 1440:
case 1500:
case 3423:
case 605:
case 1446:
case 976:
case 1187:
case 1153:
case 2897:
case 2996:
case 802:
case 865:
case 2398:
case 3037:
case 3484:
case 905:
case 962:
case 1399:
case 4083:
case 1634:
case 2621:
case 2145:
case 1598:
case 1909:
case 2908:
case 3440:
case 2790:
case 217:
case 3500:
case 2892:
case 1182:
case 2306:
case 2952:
case 1731:
case 2724:
case 1219:
case 2467:
case 4008:
case 3931:
case 1084:
case 152:
case 579:
case 1489:
case 474:
case 1555:
case 3394:
case 2319:
case 2805:
case 2488:
case 3676:
case 1343:
case 3320:
case 2299:
case 3728:
case 3200:
case 40:
case 3214:
case 1928:
case 1298:
case 2355:
case 2518:
case 1704:
case 2169:
case 3910:
case 199:
case 122:
case 2475:
case 2138:
case 250:
case 1139:
case 1710:
case 29:
case 3668:
case 1519:
case 3904:
case 244:
case 1168:
case 3639:
case 1716:
case 3176:
case 3343:
case 3817:
case 1320:
case 3489:
case 834:
case 3318:
case 1394:
case 3206:
case 2594:
case 385:
case 2638:
case 3326:
case 1910:
case 552:
case 3710:
case 1668:
case 3519:
case 3670:
case 3168:
case 1639:
case 428:
case 1728:
case 1200:
case 1089:
case 3812:
case 1214:
case 3298:
case 5:
case 3207:
case 1649:
case 484:
case 2648:
case 1474:
case 2705:
case 346:
case 3595:
case 2773:
case 3816:
case 2381:
case 2613:
case 1677:
case 1411:
case 1672:
case 1581:
case 203:
case 3333:
case 3172:
case 1712:
case 938:
case 638:
case 175:
case 833:
case 1810:
case 2554:
case 3011:
case 389:
case 268:
case 457:
case 712:
case 395:
case 2113:
case 1816:
case 3717:
case 2973:
case 3677:
case 3411:
case 1563:
case 2905:
case 243:
case 2148:
case 146:
case 28:
case 1011:
case 195:
case 3581:
case 1333:
case 3712:
case 1258:
case 1912:
case 2363:
case 2829:
case 1475:
case 1138:
case 3669:
case 299:
case 222:
case 37:
case 3638:
case 2704:
case 3594:
case 1355:
case 2168:
case 2670:
case 144:
case 19:
case 150:
case 2812:
case 409:
case 1299:
case 567:
case 2928:
case 2298:
case 1543:
case 1403:
case 571:
case 2176:
case 3075:
case 1873:
case 774:
case 2343:
case 2318:
case 2489:
case 1488:
case 3003:
case 230:
case 2206:
case 591:
case 2101:
case 2089:
case 3929:
case 3299:
case 4004:
case 1729:
case 3543:
case 2214:
case 1088:
case 783:
case 3403:
case 3138:
case 520:
case 1669:
case 17:
case 2910:
case 1638:
case 1594:
case 3355:
case 2904:
case 2668:
case 279:
case 350:
case 2170:
case 3526:
case 2394:
case 449:
case 3488:
case 3805:
case 887:
case 2716:
case 2676:
case 1075:
case 627:
case 794:
case 2320:
case 910:
case 38:
case 3522:
case 2804:
case 168:
case 1554:
case 3829:
case 412:
case 3259:
case 581:
case 3533:
case 1613:
case 3215:
case 1773:
case 784:
case 2411:
case 2677:
case 958:
case 2717:
case 343:
case 658:
case 437:
case 3148:
case 853:
case 811:
case 445:
case 1648:
case 3527:
case 2258:
case 303:
case 1829:
case 773:
case 295:
case 118:
case 368:
case 289:
case 1395:
case 2202:
case 143:
case 4017:
case 2207:
case 2322:
case 2149:
case 2595:
case 246:
case 1148:
case 3705:
case 1533:
case 3613:
case 2816:
case 3381:
case 2917:
case 3773:
case 1113:
case 2563:
case 1973:
case 2177:
case 1485:
case 1750:
case 1559:
case 2315:
case 3890:
case 2558:
case 181:
case 1091:
case 2809:
case 3950:
case 1466:
case 974:
case 2030:
case 2502:
case 3792:
case 2436:
case 568:
case 3861:
case 760:
case 3078:
case 2:
case 2193:
case 1857:
case 1302:
case 2186:
case 2925:
case 1227:
case 1896:
case 1883:
case 3085:
case 2741:
case 3797:
case 3756:
case 3491:
case 4025:
case 3066:
case 1135:
case 3635:
case 1358:
case 1824:
case 1254:
case 1792:
case 3222:
case 1078:
case 3852:
case 994:
case 3750:
case 727:
case 694:
case 64:
case 1890:
case 2180:
case 81:
case 4041:
case 2665:
case 2042:
case 3135:
case 2036:
case 3358:
case 1460:
case 3515:
case 888:
case 3956:
case 823:
case 543:
case 3227:
case 1085:
case 2693:
case 2941:
case 983:
case 1797:
case 2725:
case 1491:
case 3243:
case 3051:
case 1708:
case 3621:
case 1220:
case 2134:
case 1645:
case 2046:
case 2500:
case 3664:
case 3599:
case 167:
case 2709:
case 984:
case 3952:
case 1961:
case 2682:
case 3892:
case 758:
case 824:
case 550:
case 3761:
case 1752:
case 544:
case 1757:
case 3462:
case 1451:
case 1783:
case 2841:
case 3226:
case 657:
case 2037:
case 693:
case 1067:
case 2219:
case 1724:
case 1952:
case 2731:
case 4009:
case 2182:
case 3961:
case 2437:
case 57:
case 1892:
case 252:
case 2084:
case 1761:
case 1218:
case 1467:
case 3850:
case 2598:
case 2634:
case 3645:
case 3062:
case 2423:
case 117:
case 1790:
case 1664:
case 3164:
case 1398:
case 3067:
case 504:
case 2446:
case 1462:
case 973:
case 2255:
case 1226:
case 2432:
case 1996:
case 1897:
case 2825:
case 1856:
case 2187:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745402402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,];
var gg_b = "1745402402/";

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
