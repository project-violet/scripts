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
case 3786:
case 212:
case 2703:
case 750:
case 1344:
case 1296:
case 1629:
case 3930:
case 514:
case 803:
case 870:
case 1594:
case 3894:
case 3337:
case 3712:
case 1829:
case 693:
case 2785:
case 2706:
case 2640:
case 2036:
case 988:
case 1194:
case 2071:
case 307:
case 710:
case 3521:
case 968:
case 2798:
case 134:
case 740:
case 1906:
case 1985:
case 3051:
case 369:
case 3225:
case 1494:
case 3797:
case 1287:
case 3429:
case 2891:
case 1715:
case 544:
case 2226:
case 1208:
case 479:
case 761:
case 2524:
case 242:
case 492:
case 1032:
case 1702:
case 406:
case 2503:
case 1805:
case 3505:
case 850:
case 133:
case 3497:
case 1605:
case 3729:
case 2106:
case 1924:
case 3183:
case 1128:
case 1270:
case 929:
case 2352:
case 1375:
case 3067:
case 2585:
case 2506:
case 3583:
case 3828:
case 1415:
case 574:
case 836:
case 1042:
case 810:
case 1219:
case 2827:
case 3365:
case 3186:
case 3260:
case 3486:
case 2816:
case 2403:
case 2598:
case 525:
case 419:
case 3347:
case 4032:
case 2281:
case 1897:
case 2616:
case 3597:
case 2043:
case 840:
case 328:
case 2348:
case 2882:
case 3412:
case 179:
case 1115:
case 1428:
case 3483:
case 2830:
case 2485:
case 990:
case 3602:
case 4080:
case 3197:
case 2046:
case 220:
case 553:
case 1502:
case 3802:
case 702:
case 987:
case 1890:
case 3590:
case 3449:
case 3947:
case 3773:
case 2775:
case 1752:
case 2144:
case 308:
case 956:
case 1953:
case 2081:
case 3739:
case 3245:
case 2243:
case 1138:
case 3838:
case 2544:
case 930:
case 916:
case 2637:
case 494:
case 659:
case 3776:
case 3441:
case 1766:
case 745:
case 2837:
case 3731:
case 200:
case 3190:
case 3001:
case 4087:
case 273:
case 4093:
case 1849:
case 426:
case 3549:
case 2756:
case 3084:
case 3141:
case 4022:
case 1324:
case 1242:
case 1438:
case 875:
case 1841:
case 909:
case 1070:
case 2762:
case 2753:
case 3060:
case 88:
case 2620:
case 1641:
case 2963:
case 2268:
case 1019:
case 552:
case 3790:
case 3025:
case 3131:
case 2665:
case 213:
case 3663:
case 225:
case 1552:
case 1306:
case 3852:
case 2575:
case 3573:
case 1166:
case 2328:
case 1639:
case 1873:
case 2456:
case 995:
case 1563:
case 802:
case 3539:
case 2092:
case 2026:
case 2744:
case 692:
case 3259:
case 845:
case 3139:
case 3666:
case 1303:
case 1264:
case 2462:
case 1631:
case 679:
case 2453:
case 3455:
case 3866:
case 1232:
case 3173:
case 253:
case 432:
case 1676:
case 1831:
case 3531:
case 1096:
case 3018:
case 4070:
case 2233:
case 3155:
case 3749:
case 3235:
case 1452:
case 2938:
case 1463:
case 2017:
case 4019:
case 3937:
case 3439:
case 815:
case 1093:
case 633:
case 2672:
case 3648:
case 78:
case 2562:
case 2236:
case 2156:
case 1398:
case 3476:
case 3316:
case 2647:
case 3382:
case 3555:
case 76:
case 3431:
case 796:
case 327:
case 1022:
case 3290:
case 2393:
case 275:
case 3395:
case 3961:
case 446:
case 296:
case 2098:
case 3545:
case 3858:
case 1845:
case 3097:
case 1910:
case 2244:
case 1158:
case 1954:
case 2143:
case 1015:
case 629:
case 1764:
case 814:
case 503:
case 1979:
case 1002:
case 409:
case 467:
case 2964:
case 3900:
case 3249:
case 3735:
case 2733:
case 1177:
case 753:
case 2754:
case 3086:
case 3005:
case 3307:
case 3012:
case 487:
case 1142:
case 800:
case 2779:
case 2932:
case 1458:
case 176:
case 3842:
case 2980:
case 3388:
case 1542:
case 690:
case 1867:
case 3241:
case 2006:
case 2085:
case 195:
case 1028:
case 713:
case 1577:
case 4094:
case 2678:
case 522:
case 377:
case 2568:
case 994:
case 1667:
case 2771:
case 3551:
case 739:
case 3978:
case 3880:
case 2942:
case 3435:
case 3174:
case 2370:
case 1580:
case 874:
case 2410:
case 2275:
case 1252:
case 510:
case 1132:
case 3273:
case 1651:
case 109:
case 1164:
case 4002:
case 3680:
case 843:
case 3159:
case 3745:
case 3559:
case 1674:
case 688:
case 2800:
case 993:
case 3832:
case 1532:
case 1180:
case 668:
case 3151:
case 347:
case 331:
case 2600:
case 2869:
case 2171:
case 495:
case 4028:
case 561:
case 773:
case 700:
case 2510:
case 3535:
case 476:
case 1480:
case 2136:
case 2256:
case 1946:
case 635:
case 1389:
case 3957:
case 2179:
case 386:
case 1742:
case 2861:
case 813:
case 3459:
case 504:
case 1464:
case 3314:
case 2133:
case 1248:
case 3021:
case 2661:
case 2958:
case 2234:
case 1943:
case 2571:
case 2768:
case 187:
case 357:
case 720:
case 1818:
case 2423:
case 676:
case 1193:
case 1346:
case 2517:
case 3229:
case 695:
case 190:
case 1989:
case 3784:
case 979:
case 3622:
case 1593:
case 1408:
case 2426:
case 3914:
case 1719:
case 3950:
case 2358:
case 3822:
case 1343:
case 222:
case 1981:
case 2695:
case 1048:
case 33:
case 3055:
case 2704:
case 3221:
case 1052:
case 2075:
case 799:
case 575:
case 2523:
case 1496:
case 58:
case 3039:
case 378:
case 3709:
case 2592:
case 1108:
case 1904:
case 129:
case 2919:
case 2688:
case 3887:
case 1587:
case 852:
case 3076:
case 468:
case 2526:
case 1508:
case 2607:
case 203:
case 3701:
case 2224:
case 2123:
case 270:
case 391:
case 1066:
case 3611:
case 2203:
case 3205:
case 3049:
case 2908:
case 2104:
case 1684:
case 1119:
case 3718:
case 3811:
case 3907:
case 3409:
case 656:
case 281:
case 4048:
case 919:
case 1170:
case 3212:
case 2717:
case 3988:
case 1923:
case 3870:
case 3184:
case 2380:
case 1570:
case 1660:
case 616:
case 135:
case 2987:
case 1519:
case 502:
case 3819:
case 3670:
case 2489:
case 934:
case 1992:
case 555:
case 2298:
case 3361:
case 2650:
case 2723:
case 3090:
case 236:
case 646:
case 2792:
case 188:
case 899:
case 358:
case 2581:
case 3297:
case 2850:
case 1787:
case 2814:
case 3484:
case 609:
case 1333:
case 1470:
case 949:
case 2996:
case 1038:
case 1708:
case 2044:
case 2726:
case 3109:
case 1379:
case 1419:
case 429:
case 1917:
case 712:
case 4063:
case 523:
case 515:
case 1202:
case 2957:
case 3179:
case 1778:
case 286:
case 1561:
case 1247:
case 3861:
case 2459:
case 1671:
case 3536:
case 92:
case 1836:
case 3262:
case 3253:
case 2135:
case 266:
case 3958:
case 3661:
case 302:
case 3234:
case 1871:
case 44:
case 1636:
case 1169:
case 3768:
case 257:
case 1854:
case 1833:
case 3510:
case 3533:
case 3136:
case 2029:
case 1654:
case 1161:
case 1301:
case 1879:
case 611:
case 4016:
case 1461:
case 1500:
case 518:
case 2832:
case 1384:
case 2664:
case 247:
case 2151:
case 45:
case 3600:
case 3311:
case 4013:
case 4030:
case 680:
case 1469:
case 41:
case 3942:
case 2174:
case 3370:
case 558:
case 1091:
case 660:
case 17:
case 3319:
case 827:
case 2745:
case 2677:
case 1220:
case 1761:
case 2842:
case 1578:
case 324:
case 3085:
case 2877:
case 3387:
case 2642:
case 1868:
case 277:
case 53:
case 3771:
case 3168:
case 3964:
case 2900:
case 1769:
case 3308:
case 2735:
case 3710:
case 3003:
case 2005:
case 2167:
case 4040:
case 14:
case 1178:
case 3779:
case 3443:
case 3932:
case 3244:
case 1318:
case 3396:
case 3143:
case 2759:
case 1030:
case 2467:
case 11:
case 2969:
case 465:
case 1846:
case 47:
case 3468:
case 2751:
case 3393:
case 1016:
case 1643:
case 3857:
case 1557:
case 727:
case 15:
case 197:
case 578:
case 2858:
case 2545:
case 1335:
case 1150:
case 3044:
case 218:
case 180:
case 3589:
case 350:
case 1889:
case 2501:
case 1037:
case 2460:
case 3993:
case 2995:
case 1216:
case 2361:
case 2101:
case 3614:
case 310:
case 3189:
case 336:
case 141:
case 3792:
case 2509:
case 258:
case 3581:
case 962:
case 1550:
case 3922:
case 1282:
case 2484:
case 2870:
case 2619:
case 3380:
case 2184:
case 789:
case 1604:
case 3987:
case 566:
case 2670:
case 3489:
case 1227:
case 769:
case 2560:
case 3504:
case 471:
case 1804:
case 2611:
case 3203:
case 2205:
case 4047:
case 517:
case 3364:
case 2049:
case 2300:
case 2718:
case 638:
case 2811:
case 3481:
case 498:
case 4072:
case 151:
case 2212:
case 1414:
case 3332:
case 65:
case 697:
case 3526:
case 1826:
case 2808:
case 1495:
case 303:
case 2701:
case 1188:
case 3123:
case 1984:
case 2125:
case 1626:
case 291:
case 1299:
case 2608:
case 3807:
case 1507:
case 1367:
case 3075:
case 2073:
case 1823:
case 3970:
case 3523:
case 2525:
case 807:
case 278:
case 3592:
case 1892:
case 3688:
case 61:
case 480:
case 2887:
case 1750:
case 2357:
case 728:
case 1047:
case 2893:
case 869:
case 2914:
case 1240:
case 1345:
case 2950:
case 3358:
case 1407:
case 3034:
case 1072:
case 23:
case 3053:
case 2760:
case 1909:
case 889:
case 4020:
case 2896:
case 1617:
case 2518:
case 3423:
case 3517:
case 2229:
case 1901:
case 2815:
case 1530:
case 1513:
case 3406:
case 3813:
case 3830:
case 1182:
case 2615:
case 3630:
case 1427:
case 1799:
case 2802:
case 1116:
case 2486:
case 3403:
case 998:
case 1898:
case 3598:
case 3682:
case 4000:
case 73:
case 2045:
case 3281:
case 2597:
case 1921:
case 228:
case 10:
case 2940:
case 1791:
case 778:
case 2112:
case 3627:
case 1806:
case 1885:
case 3506:
case 3585:
case 2067:
case 858:
case 3068:
case 1685:
case 1606:
case 2628:
case 3363:
case 2186:
case 372:
case 527:
case 3204:
case 3503:
case 1416:
case 2505:
case 2586:
case 1376:
case 818:
case 791:
case 1127:
case 121:
case 1331:
case 482:
case 2729:
case 3185:
case 3106:
case 2512:
case 2284:
case 748:
case 62:
case 1730:
case 1624:
case 1191:
case 3226:
case 1440:
case 40:
case 3524:
case 1207:
case 2074:
case 3798:
case 1199:
case 1716:
case 2320:
case 1983:
case 3928:
case 1288:
case 2051:
case 3223:
case 269:
case 911:
case 2429:
case 3891:
case 83:
case 2927:
case 3785:
case 2129:
case 3036:
case 601:
case 937:
case 1061:
case 162:
case 1540:
case 2982:
case 207:
case 1499:
case 2521:
case 1997:
case 312:
case 3703:
case 3010:
case 3033:
case 4078:
case 2121:
case 2035:
case 980:
case 1069:
case 2913:
case 2930:
case 3079:
case 2894:
case 3902:
case 960:
case 2337:
case 2712:
case 1491:
case 2529:
case 1095:
case 2648:
case 3672:
case 2476:
case 2741:
case 3647:
case 1834:
case 2555:
case 3872:
case 3553:
case 1662:
case 227:
case 8:
case 3271:
case 1397:
case 3233:
case 2749:
case 2235:
case 2473:
case 3254:
case 3315:
case 3134:
case 3475:
case 1465:
case 3162:
case 464:
case 3302:
case 3556:
case 3279:
case 847:
case 2937:
case 3026:
case 817:
case 2139:
case 1165:
case 3462:
case 1200:
case 94:
case 3453:
case 1737:
case 2274:
case 3175:
case 2866:
case 2173:
case 353:
case 2531:
case 2790:
case 2251:
case 886:
case 3665:
case 2663:
case 1875:
case 2852:
case 2573:
case 3328:
case 2920:
case 1565:
case 2863:
case 857:
case 3092:
case 89:
case 1278:
case 3444:
case 3952:
case 1520:
case 1973:
case 3820:
case 354:
case 3762:
case 1437:
case 339:
case 2755:
case 3004:
case 3734:
case 1939:
case 2965:
case 3963:
case 3268:
case 164:
case 2490:
case 1976:
case 682:
case 4095:
case 2549:
case 1931:
case 314:
case 2141:
case 662:
case 3966:
case 1420:
case 2838:
case 3544:
case 3637:
case 2638:
case 1644:
case 1537:
case 717:
case 300:
case 2001:
case 3246:
case 463:
case 2590:
case 766:
case 938:
case 1257:
case 2773:
case 2947:
case 3775:
case 1765:
case 12:
case 1321:
case 2340:
case 1955:
case 2972:
case 2009:
case 877:
case 3081:
case 4007:
case 2739:
case 2245:
case 2513:
case 3428:
case 3515:
case 2182:
case 1602:
case 1197:
case 2929:
case 851:
case 3502:
case 3356:
case 1802:
case 583:
case 3697:
case 4059:
case 2898:
case 3362:
case 93:
case 1597:
case 1045:
case 2921:
case 128:
case 1209:
case 2698:
case 379:
case 20:
case 1940:
case 3334:
case 2250:
case 3115:
case 2791:
case 3270:
case 1112:
case 2373:
case 3528:
case 3883:
case 3415:
case 1828:
case 2806:
case 2413:
case 2430:
case 1067:
case 3375:
case 978:
case 3042:
case 2527:
case 841:
case 837:
case 3219:
case 2339:
case 2685:
case 2606:
case 1186:
case 3886:
case 1586:
case 1505:
case 221:
case 2331:
case 880:
case 3686:
case 2603:
case 1497:
case 1729:
case 2482:
case 407:
case 1284:
case 3064:
case 2349:
case 2624:
case 2191:
case 2730:
case 2440:
case 871:
case 2912:
case 2824:
case 2207:
case 1421:
case 428:
case 1320:
case 3985:
case 1225:
case 2288:
case 169:
case 3494:
case 52:
case 3287:
case 1429:
case 711:
case 1927:
case 2782:
case 359:
case 1783:
case 3728:
case 737:
case 741:
case 3998:
case 958:
case 2390:
case 1916:
case 584:
case 262:
case 2061:
case 3293:
case 2540:
case 2727:
case 3821:
case 1521:
case 2997:
case 1694:
case 2140:
case 3344:
case 1913:
case 3629:
case 3296:
case 1894:
case 501:
case 1529:
case 2491:
case 2634:
case 2261:
case 326:
case 3398:
case 1741:
case 1316:
case 1476:
case 2834:
case 2853:
case 1382:
case 3855:
case 1555:
case 127:
case 2662:
case 1431:
case 3096:
case 1018:
case 1155:
case 1313:
case 1473:
case 2465:
case 2856:
case 1937:
case 71:
case 2147:
case 1439:
case 3008:
case 2949:
case 1139:
case 1666:
case 1259:
case 1576:
case 3163:
case 2386:
case 3264:
case 3448:
case 1455:
case 2312:
case 1274:
case 1866:
case 3566:
case 1173:
case 2007:
case 3152:
case 283:
case 1251:
case 2941:
case 1573:
case 3166:
case 2383:
case 3873:
case 1920:
case 3639:
case 2875:
case 3306:
case 3280:
case 1863:
case 4001:
case 3087:
case 2565:
case 77:
case 2278:
case 2520:
case 2973:
case 765:
case 2747:
case 3841:
case 4018:
case 2437:
case 1060:
case 2939:
case 1391:
case 785:
case 1965:
case 264:
case 3019:
case 582:
case 931:
case 947:
case 81:
case 3849:
case 1399:
case 1141:
case 393:
case 3649:
case 2420:
case 1441:
case 1776:
case 2537:
case 84:
case 2644:
case 917:
case 3956:
case 1731:
case 99:
case 3962:
case 738:
case 966:
case 1773:
case 2765:
case 3763:
case 2321:
case 22:
case 1009:
case 108:
case 3934:
case 3138:
case 2778:
case 908:
case 648:
case 72:
case 2561:
case 4086:
case 4005:
case 511:
case 2836:
case 1021:
case 1314:
case 2272:
case 3248:
case 3777:
case 2945:
case 3381:
case 157:
case 2040:
case 1451:
case 117:
case 2569:
case 4083:
case 3835:
case 3480:
case 2810:
case 2833:
case 2679:
case 1029:
case 2654:
case 2161:
case 316:
case 3635:
case 3389:
case 2879:
case 3859:
case 658:
case 346:
case 701:
case 3564:
case 1276:
case 1832:
case 580:
case 1574:
case 3180:
case 3874:
case 2469:
case 764:
case 1880:
case 1435:
case 1978:
case 3132:
case 1273:
case 3252:
case 2091:
case 3263:
case 541:
case 27:
case 3304:
case 2100:
case 3164:
case 2360:
case 784:
case 1680:
case 3758:
case 1677:
case 2325:
case 1842:
case 2578:
case 3028:
case 3867:
case 1567:
case 1642:
case 2868:
case 598:
case 4029:
case 2457:
case 1249:
case 63:
case 1005:
case 783:
case 571:
case 24:
case 457:
case 2178:
case 3142:
case 466:
case 4021:
case 763:
case 3442:
case 2478:
case 3910:
case 678:
case 3238:
case 1759:
case 3158:
case 1145:
case 2646:
case 2013:
case 1467:
case 3015:
case 21:
case 1969:
case 2157:
case 801:
case 1290:
case 1751:
case 3936:
case 1395:
case 1961:
case 3780:
case 691:
case 2557:
case 297:
case 447:
case 25:
case 2843:
case 1097:
case 1545:
case 2335:
case 2689:
case 260:
case 2114:
case 3310:
case 3333:
case 2230:
case 2150:
case 118:
case 1369:
case 3379:
case 3917:
case 2037:
case 1460:
case 3609:
case 3336:
case 2216:
case 2681:
case 1101:
case 1361:
case 631:
case 2788:
case 1090:
case 907:
case 1725:
case 388:
case 1509:
case 158:
case 3809:
case 237:
case 491:
case 241:
case 3371:
case 2550:
case 1484:
case 4031:
case 3228:
case 1041:
case 2925:
case 1988:
case 3570:
case 1184:
case 2604:
case 2351:
case 335:
case 2795:
case 3111:
case 1401:
case 617:
case 3519:
case 969:
case 1819:
case 80:
case 666:
case 1160:
case 3926:
case 1049:
case 657:
case 3684:
case 3119:
case 69:
case 1907:
case 3511:
case 1811:
case 4055:
case 43:
case 1584:
case 2374:
case 3884:
case 2450:
case 1076:
case 721:
case 4090:
case 1808:
case 3493:
case 2495:
case 1701:
case 1031:
case 191:
case 458:
case 2507:
case 3066:
case 2107:
case 1073:
case 2367:
case 418:
case 1418:
case 2823:
case 3496:
case 1687:
case 1039:
case 597:
case 178:
case 2960:
case 3368:
case 2714:
case 329:
case 2623:
case 3063:
case 2750:
case 2291:
case 3587:
case 1357:
case 1622:
case 2595:
case 1893:
case 3408:
case 70:
case 1118:
case 2240:
case 1914:
case 3522:
case 3981:
case 2407:
case 448:
case 1221:
case 2909:
case 2072:
case 3048:
case 4041:
case 3596:
case 2617:
case 1425:
case 3294:
case 271:
case 3346:
case 2195:
case 2901:
case 3487:
case 1784:
case 3989:
case 670:
case 943:
case 1146:
case 3643:
case 2780:
case 1098:
case 1857:
case 18:
case 3082:
case 4024:
case 415:
case 3843:
case 1322:
case 2558:
case 3478:
case 1244:
case 2933:
case 1143:
case 2238:
case 2158:
case 1396:
case 3013:
case 455:
case 2015:
case 31:
case 3157:
case 2732:
case 2317:
case 953:
case 1168:
case 1964:
case 622:
case 1003:
case 3959:
case 1779:
case 2458:
case 3220:
case 3761:
case 2323:
case 2542:
case 3951:
case 445:
case 2028:
case 1006:
case 832:
case 2577:
case 794:
case 3027:
case 2392:
case 3868:
case 1568:
case 925:
case 1771:
case 1446:
case 913:
case 155:
case 3967:
case 826:
case 1433:
case 1370:
case 939:
case 2580:
case 2132:
case 588:
case 954:
case 2304:
case 2651:
case 2968:
case 209:
case 2164:
case 3360:
case 1479:
case 1319:
case 1743:
case 1977:
case 46:
case 1800:
case 3500:
case 2564:
case 2659:
case 3099:
case 2180:
case 2874:
case 1600:
case 48:
case 115:
case 1471:
case 1024:
case 123:
case 424:
case 4085:
case 145:
case 1554:
case 2835:
case 3833:
case 1510:
case 1256:
case 604:
case 944:
case 1669:
case 1136:
case 2946:
case 3301:
case 3161:
case 2094:
case 216:
case 2389:
case 230:
case 3778:
case 256:
case 894:
case 1179:
case 4003:
case 3561:
case 1861:
case 3247:
case 535:
case 267:
case 3400:
case 3836:
case 1253:
case 1133:
case 2248:
case 3272:
case 1234:
case 2777:
case 102:
case 1661:
case 1958:
case 2432:
case 2381:
case 1571:
case 287:
case 3309:
case 338:
case 3040:
case 3169:
case 2122:
case 3617:
case 3488:
case 920:
case 2294:
case 2711:
case 2487:
case 1517:
case 1056:
case 440:
case 290:
case 1062:
case 834:
case 1117:
case 3047:
case 2593:
case 1426:
case 2408:
case 3240:
case 2522:
case 3345:
case 1034:
case 122:
case 398:
case 1053:
case 3909:
case 1704:
case 2052:
case 1075:
case 3367:
case 2825:
case 3823:
case 1592:
case 2904:
case 2368:
case 2625:
case 450:
case 229:
case 1919:
case 3623:
case 3750:
case 1417:
case 1377:
case 436:
case 1526:
case 3826:
case 1224:
case 103:
case 675:
case 2422:
case 170:
case 3188:
case 3984:
case 3299:
case 849:
case 3626:
case 2066:
case 1908:
case 1104:
case 161:
case 4062:
case 2684:
case 3359:
case 422:
case 4034:
case 181:
case 351:
case 719:
case 2170:
case 2884:
case 1717:
case 516:
case 1285:
case 1380:
case 3604:
case 2660:
case 3020:
case 567:
case 235:
case 2793:
case 3795:
case 892:
case 2722:
case 1489:
case 3227:
case 2519:
case 3804:
case 587:
case 3216:
case 3681:
case 615:
case 136:
case 1189:
case 288:
case 337:
case 341:
case 2411:
case 509:
case 3881:
case 1922:
case 3550:
case 470:
case 3689:
case 3114:
case 360:
case 2601:
case 3213:
case 2215:
case 2354:
case 1181:
case 1726:
case 1044:
case 2419:
case 1589:
case 655:
case 2801:
case 3707:
case 912:
case 3037:
case 1404:
case 1033:
case 1010:
case 2344:
case 950:
case 1915:
case 2594:
case 1902:
case 593:
case 2829:
case 1217:
case 2728:
case 614:
case 788:
case 1036:
case 1640:
case 2998:
case 2621:
case 3295:
case 362:
case 2222:
case 936:
case 3540:
case 829:
case 3997:
case 1124:
case 673:
case 1928:
case 1223:
case 3288:
case 532:
case 735:
case 2287:
case 4046:
case 3782:
case 420:
case 2064:
case 3349:
case 2715:
case 2903:
case 1699:
case 981:
case 1226:
case 3824:
case 1524:
case 2032:
case 4043:
case 890:
case 961:
case 2886:
case 3376:
case 3803:
case 643:
case 903:
case 4036:
case 3127:
case 321:
case 2794:
case 2605:
case 233:
case 2211:
case 2924:
case 4071:
case 1366:
case 526:
case 2883:
case 1352:
case 1585:
case 412:
case 4033:
case 729:
case 2042:
case 3527:
case 1827:
case 199:
case 2683:
case 3685:
case 3606:
case 172:
case 4079:
case 2402:
case 594:
case 1403:
case 1816:
case 922:
case 1598:
case 2102:
case 1682:
case 835:
case 653:
case 1616:
case 2058:
case 442:
case 292:
case 3698:
case 2353:
case 279:
case 3582:
case 30:
case 3355:
case 3130:
case 3113:
case 1813:
case 1485:
case 2428:
case 405:
case 2515:
case 3929:
case 1046:
case 1630:
case 1724:
case 2502:
case 2356:
case 3116:
case 534:
case 876:
case 4026:
case 1775:
case 902:
case 895:
case 3765:
case 3050:
case 2690:
case 3955:
case 2138:
case 2258:
case 519:
case 3844:
case 1544:
case 4023:
case 716:
case 730:
case 413:
case 425:
case 3329:
case 2766:
case 3537:
case 1837:
case 4092:
case 2956:
case 1394:
case 1089:
case 173:
case 945:
case 474:
case 3976:
case 2849:
case 293:
case 443:
case 1966:
case 2649:
case 1444:
case 709:
case 3520:
case 3747:
case 1820:
case 3973:
case 2975:
case 1952:
case 506:
case 3772:
case 2748:
case 3437:
case 3939:
case 1620:
case 1963:
case 1268:
case 2019:
case 444:
case 125:
case 3941:
case 1328:
case 2639:
case 2873:
case 2552:
case 2385:
case 2280:
case 2563:
case 1865:
case 2087:
case 3565:
case 2839:
case 579:
case 3675:
case 887:
case 1026:
case 3949:
case 2738:
case 2163:
case 363:
case 3200:
case 2631:
case 3312:
case 3737:
case 3007:
case 1175:
case 2152:
case 2676:
case 153:
case 816:
case 2096:
case 3656:
case 3269:
case 699:
case 1153:
case 1233:
case 1210:
case 3172:
case 2452:
case 672:
case 1938:
case 1475:
case 1315:
case 2463:
case 1302:
case 1556:
case 533:
case 1162:
case 4004:
case 1279:
case 3095:
case 3720:
case 3653:
case 226:
case 1672:
case 98:
case 1562:
case 3834:
case 1647:
case 2466:
case 996:
case 809:
case 3853:
case 2548:
case 1872:
case 414:
case 143:
case 3397:
case 2022:
case 1271:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749610801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,];
var gg_b = "1749610801/";

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
