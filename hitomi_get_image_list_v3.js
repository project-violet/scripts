// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 748:
case 1018:
case 3521:
case 4041:
case 2943:
case 1731:
case 2134:
case 3703:
case 360:
case 3003:
case 872:
case 1141:
case 2543:
case 3092:
case 3847:
case 3166:
case 1649:
case 426:
case 2376:
case 3837:
case 644:
case 3161:
case 3262:
case 3687:
case 3496:
case 1675:
case 3870:
case 64:
case 787:
case 2082:
case 1611:
case 3693:
case 2416:
case 512:
case 988:
case 1420:
case 1449:
case 4015:
case 1955:
case 110:
case 2952:
case 703:
case 2171:
case 3611:
case 3483:
case 3638:
case 1560:
case 1435:
case 614:
case 173:
case 15:
case 3386:
case 2018:
case 1782:
case 628:
case 2632:
case 4020:
case 4002:
case 1774:
case 4007:
case 569:
case 2484:
case 2427:
case 3985:
case 1405:
case 165:
case 2443:
case 434:
case 2216:
case 2978:
case 1885:
case 3658:
case 2529:
case 254:
case 2832:
case 1567:
case 2563:
case 778:
case 3774:
case 513:
case 925:
case 3577:
case 1930:
case 2935:
case 2931:
case 3935:
case 1853:
case 3192:
case 574:
case 883:
case 1755:
case 1208:
case 1959:
case 449:
case 631:
case 722:
case 2770:
case 2009:
case 1861:
case 336:
case 1468:
case 645:
case 1108:
case 3754:
case 359:
case 3093:
case 3518:
case 2901:
case 3604:
case 1660:
case 1347:
case 3391:
case 2174:
case 124:
case 2406:
case 1479:
case 1566:
case 2806:
case 741:
case 2504:
case 611:
case 3138:
case 486:
case 1637:
case 3953:
case 536:
case 1517:
case 93:
case 1248:
case 239:
case 393:
case 401:
case 1918:
case 3781:
case 3618:
case 3371:
case 1887:
case 4095:
case 3182:
case 397:
case 1118:
case 2316:
case 2864:
case 3203:
case 1448:
case 2751:
case 863:
case 27:
case 2028:
case 2003:
case 1219:
case 2349:
case 3490:
case 3383:
case 1337:
case 2251:
case 365:
case 3288:
case 1395:
case 2694:
case 3855:
case 3971:
case 499:
case 313:
case 1004:
case 2378:
case 81:
case 2842:
case 706:
case 916:
case 1657:
case 3364:
case 2105:
case 3365:
case 1279:
case 3426:
case 1718:
case 3388:
case 3024:
case 2465:
case 734:
case 590:
case 35:
case 2749:
case 1389:
case 587:
case 3755:
case 2075:
case 2570:
case 3151:
case 375:
case 444:
case 2176:
case 1806:
case 948:
case 511:
case 879:
case 3684:
case 3993:
case 3118:
case 2945:
case 2114:
case 2065:
case 181:
case 53:
case 1997:
case 240:
case 1588:
case 586:
case 4035:
case 2738:
case 3894:
case 3269:
case 1025:
case 718:
case 2222:
case 2329:
case 3926:
case 557:
case 2056:
case 2191:
case 2726:
case 1984:
case 953:
case 1961:
case 3663:
case 2695:
case 1685:
case 1609:
case 1615:
case 589:
case 1159:
case 1696:
case 3078:
case 95:
case 2672:
case 887:
case 387:
case 1258:
case 2169:
case 2496:
case 659:
case 3840:
case 1908:
case 2528:
case 2011:
case 1681:
case 683:
case 184:
case 2711:
case 2437:
case 1275:
case 476:
case 3903:
case 2306:
case 3586:
case 1830:
case 2564:
case 1579:
case 3209:
case 847:
case 352:
case 1051:
case 1074:
case 182:
case 3400:
case 1733:
case 243:
case 3822:
case 3197:
case 1029:
case 2410:
case 759:
case 2631:
case 276:
case 1807:
case 197:
case 3038:
case 112:
case 1023:
case 1758:
case 2675:
case 3368:
case 2415:
case 1494:
case 3091:
case 1123:
case 2869:
case 2276:
case 3692:
case 2490:
case 2646:
case 1808:
case 288:
case 2352:
case 281:
case 265:
case 4065:
case 1171:
case 3313:
case 2341:
case 636:
case 203:
case 1548:
case 3989:
case 1358:
case 1825:
case 3258:
case 3841:
case 286:
case 1979:
case 2208:
case 535:
case 1965:
case 4069:
case 2860:
case 3207:
case 3514:
case 1928:
case 523:
case 2593:
case 4000:
case 1796:
case 2413:
case 1322:
case 3552:
case 2129:
case 1620:
case 1809:
case 4081:
case 641:
case 1497:
case 843:
case 2944:
case 2296:
case 3534:
case 3695:
case 663:
case 2911:
case 3620:
case 2398:
case 3568:
case 1879:
case 2551:
case 2980:
case 699:
case 1860:
case 3800:
case 774:
case 1178:
case 350:
case 3832:
case 306:
case 1553:
case 484:
case 6:
case 1376:
case 966:
case 3460:
case 3560:
case 1471:
case 2339:
case 3556:
case 394:
case 3255:
case 1656:
case 965:
case 3023:
case 3809:
case 3414:
case 3981:
case 2732:
case 2872:
case 1007:
case 472:
case 550:
case 1921:
case 3821:
case 1912:
case 2523:
case 1891:
case 3908:
case 1452:
case 2510:
case 3782:
case 684:
case 3089:
case 1081:
case 2243:
case 2835:
case 2180:
case 1834:
case 2704:
case 2674:
case 1983:
case 3270:
case 2627:
case 504:
case 1846:
case 1201:
case 1818:
case 3964:
case 2151:
case 3675:
case 3941:
case 3385:
case 36:
case 1603:
case 3939:
case 332:
case 2623:
case 2371:
case 1600:
case 3000:
case 31:
case 3442:
case 428:
case 533:
case 2440:
case 3027:
case 3717:
case 1316:
case 790:
case 3532:
case 2372:
case 3761:
case 3624:
case 2810:
case 1899:
case 59:
case 1680:
case 1304:
case 3071:
case 3895:
case 2532:
case 2486:
case 740:
case 1394:
case 26:
case 1454:
case 3600:
case 1180:
case 3671:
case 1115:
case 3172:
case 2840:
case 20:
case 2888:
case 2274:
case 2200:
case 47:
case 783:
case 2154:
case 956:
case 2155:
case 3547:
case 653:
case 3177:
case 2617:
case 115:
case 3688:
case 1969:
case 3273:
case 3457:
case 2488:
case 1292:
case 225:
case 1642:
case 348:
case 2285:
case 3871:
case 3013:
case 543:
case 2116:
case 3706:
case 693:
case 3196:
case 2165:
case 3362:
case 908:
case 3340:
case 2643:
case 2834:
case 3381:
case 3219:
case 2803:
case 1318:
case 814:
case 3133:
case 2554:
case 1436:
case 579:
case 2419:
case 2982:
case 2993:
case 3345:
case 1064:
case 3410:
case 685:
case 2178:
case 2269:
case 2031:
case 2681:
case 1473:
case 832:
case 3436:
case 3338:
case 2687:
case 3099:
case 369:
case 1725:
case 2516:
case 22:
case 3377:
case 3763:
case 1114:
case 1065:
case 801:
case 2582:
case 3004:
case 1346:
case 2619:
case 3144:
case 1281:
case 728:
case 34:
case 2509:
case 2546:
case 1149:
case 3936:
case 3335:
case 2890:
case 1632:
case 323:
case 2:
case 518:
case 440:
case 3734:
case 146:
case 516:
case 1957:
case 797:
case 2381:
case 2705:
case 4060:
case 2812:
case 1205:
case 899:
case 2573:
case 3062:
case 2163:
case 2456:
case 3079:
case 2556:
case 3988:
case 2701:
case 617:
case 2325:
case 1989:
case 1191:
case 3608:
case 1634:
case 1382:
case 2545:
case 2768:
case 3633:
case 274:
case 660:
case 460:
case 764:
case 1941:
case 3775:
case 2071:
case 325:
case 2996:
case 196:
case 2146:
case 1735:
case 2417:
case 1858:
case 3304:
case 2654:
case 1907:
case 3639:
case 226:
case 1752:
case 3363:
case 788:
case 2782:
case 1188:
case 2620:
case 481:
case 2457:
case 2597:
case 792:
case 2181:
case 1327:
case 595:
case 3987:
case 1686:
case 854:
case 2164:
case 446:
case 629:
case 402:
case 951:
case 2793:
case 3429:
case 2494:
case 3242:
case 1572:
case 3806:
case 3489:
case 1508:
case 3778:
case 2962:
case 2242:
case 2648:
case 217:
case 1252:
case 542:
case 2899:
case 3955:
case 2616:
case 2393:
case 3303:
case 4044:
case 556:
case 702:
case 3399:
case 585:
case 1920:
case 860:
case 1105:
case 2723:
case 1889:
case 258:
case 1513:
case 2385:
case 2394:
case 2722:
case 1268:
case 1026:
case 2185:
case 1008:
case 2126:
case 2896:
case 1569:
case 1833:
case 2992:
case 756:
case 339:
case 3419:
case 1798:
case 419:
case 3961:
case 2331:
case 1272:
case 674:
case 1385:
case 2277:
case 4077:
case 820:
case 2517:
case 3528:
case 3372:
case 2644:
case 3293:
case 3307:
case 2275:
case 1027:
case 3250:
case 2655:
case 4066:
case 71:
case 3392:
case 3067:
case 2650:
case 3972:
case 379:
case 671:
case 1813:
case 836:
case 960:
case 2326:
case 1927:
case 2533:
case 158:
case 886:
case 2411:
case 944:
case 2816:
case 1599:
case 784:
case 3681:
case 3918:
case 62:
case 2847:
case 895:
case 169:
case 762:
case 219:
case 3350:
case 3170:
case 3714:
case 2855:
case 3704:
case 3790:
case 2875:
case 1362:
case 2765:
case 3306:
case 3801:
case 381:
case 1500:
case 661:
case 1626:
case 3804:
case 882:
case 687:
case 3533:
case 1244:
case 1129:
case 923:
case 224:
case 3825:
case 1221:
case 845:
case 1666:
case 858:
case 3224:
case 3553:
case 1183:
case 3:
case 3829:
case 2859:
case 487:
case 2391:
case 1250:
case 3333:
case 3433:
case 2958:
case 2148:
case 3848:
case 564:
case 2353:
case 3234:
case 3160:
case 3028:
case 682:
case 2449:
case 3068:
case 4014:
case 82:
case 2649:
case 2000:
case 1898:
case 902:
case 361:
case 2939:
case 758:
case 868:
case 69:
case 534:
case 3501:
case 2657:
case 732:
case 235:
case 494:
case 3171:
case 1976:
case 1883:
case 2661:
case 259:
case 1790:
case 3561:
case 2614:
case 164:
case 862:
case 3914:
case 4082:
case 2615:
case 3896:
case 2707:
case 3202:
case 3983:
case 2268:
case 760:
case 3261:
case 2820:
case 2574:
case 2414:
case 1635:
case 2211:
case 2984:
case 2771:
case 3537:
case 211:
case 1625:
case 2237:
case 2903:
case 3544:
case 1152:
case 271:
case 2254:
case 946:
case 403:
case 10:
case 2302:
case 583:
case 1573:
case 175:
case 2688:
case 613:
case 1674:
case 187:
case 1730:
case 3240:
case 1547:
case 3424:
case 2485:
case 1503:
case 3222:
case 2389:
case 2460:
case 1427:
case 4016:
case 3785:
case 742:
case 2933:
case 3300:
case 2665:
case 798:
case 2403:
case 1541:
case 293:
case 1688:
case 1425:
case 2118:
case 1375:
case 113:
case 2755:
case 2135:
case 489:
case 2344:
case 2677:
case 2622:
case 3996:
case 668:
case 651:
case 1222:
case 1739:
case 2604:
case 1082:
case 546:
case 2493:
case 86:
case 1855:
case 3425:
case 1565:
case 3445:
case 3700:
case 3360:
case 2721:
case 577:
case 215:
case 1455:
case 104:
case 0:
case 2468:
case 1353:
case 3707:
case 2802:
case 673:
case 3289:
case 1522:
case 745:
case 309:
case 253:
case 1085:
case 3243:
case 66:
case 2734:
case 2966:
case 415:
case 474:
case 3968:
case 724:
case 245:
case 2596:
case 1329:
case 2183:
case 3244:
case 2072:
case 198:
case 3412:
case 857:
case 3506:
case 142:
case 779:
case 3127:
case 2910:
case 2526:
case 2858:
case 1890:
case 462:
case 2522:
case 1331:
case 3088:
case 3799:
case 1137:
case 1781:
case 1214:
case 3672:
case 1472:
case 2238:
case 137:
case 2825:
case 2969:
case 665:
case 1158:
case 3308:
case 2753:
case 56:
case 3428:
case 2048:
case 3905:
case 934:
case 541:
case 3180:
case 1005:
case 461:
case 2536:
case 2503:
case 2970:
case 117:
case 1009:
case 3061:
case 2746:
case 1856:
case 1713:
case 1914:
case 304:
case 2202:
case 438:
case 3745:
case 3982:
case 3589:
case 3045:
case 2917:
case 1732:
case 1278:
case 3588:
case 2312:
case 2640:
case 711:
case 2447:
case 3409:
case 192:
case 2143:
case 696:
case 1062:
case 1014:
case 2844:
case 880:
case 4072:
case 1122:
case 1284:
case 1230:
case 2886:
case 432:
case 782:
case 1783:
case 1568:
case 995:
case 666:
case 3086:
case 2955:
case 584:
case 3229:
case 3697:
case 114:
case 3635:
case 2559:
case 2461:
case 876:
case 2301:
case 749:
case 2566:
case 1361:
case 154:
case 654:
case 2685:
case 292:
case 3104:
case 3682:
case 1125:
case 1659:
case 3504:
case 2297:
case 591:
case 3569:
case 618:
case 99:
case 3283:
case 537:
case 1017:
case 1228:
case 3087:
case 686:
case 1639:
case 1204:
case 3849:
case 3117:
case 2153:
case 2304:
case 2949:
case 1003:
case 1506:
case 3555:
case 520:
case 3867:
case 3064:
case 1838:
case 2299:
case 157:
case 1552:
case 2691:
case 822:
case 1810:
case 285:
case 2580:
case 3991:
case 443:
case 1022:
case 3970:
case 3046:
case 3286:
case 1234:
case 90:
case 2592:
case 4092:
case 2739:
case 2800:
case 739:
case 3103:
case 1330:
case 1299:
case 3879:
case 4031:
case 3376:
case 2335:
case 3493:
case 2572:
case 2021:
case 2383:
case 123:
case 3256:
case 178:
case 1670:
case 1016:
case 1015:
case 3542:
case 993:
case 869:
case 2846:
case 236:
case 2930:
case 3571:
case 3889:
case 1069:
case 1968:
case 3510:
case 1817:
case 865:
case 3254:
case 199:
case 4010:
case 3205:
case 2124:
case 917:
case 3636:
case 1669:
case 1056:
case 1734:
case 3764:
case 1949:
case 1130:
case 358:
case 3298:
case 604:
case 1030:
case 1220:
case 2364:
case 2119:
case 3666:
case 3614:
case 3765:
case 2848:
case 1773:
case 2740:
case 3784:
case 1940:
case 544:
case 3043:
case 3726:
case 2612:
case 525:
case 186:
case 122:
case 2401:
case 4043:
case 2068:
case 3912:
case 3994:
case 2527:
case 2168:
case 371:
case 2162:
case 808:
case 37:
case 3567:
case 1563:
case 639:
case 1597:
case 425:
case 2051:
case 321:
case 1769:
case 3872:
case 2186:
case 330:
case 3002:
case 1594:
case 1039:
case 3485:
case 3952:
case 517:
case 1913:
case 2989:
case 3927:
case 2521:
case 2313:
case 813:
case 901:
case 3694:
case 3750:
case 3405:
case 922:
case 3132:
case 3915:
case 1903:
case 3329:
case 652:
case 1428:
case 4090:
case 842:
case 3101:
case 3482:
case 2773:
case 985:
case 1309:
case 3225:
case 1562:
case 1859:
case 1372:
case 2469:
case 3668:
case 1263:
case 3155:
case 2197:
case 547:
case 594:
case 1638:
case 1749:
case 3135:
case 1786:
case 389:
case 1550:
case 2960:
case 2104:
case 3911:
case 4050:
case 3744:
case 1877:
case 3883:
case 296:
case 1391:
case 1295:
case 1820:
case 1754:
case 1048:
case 480:
case 2534:
case 2291:
case 1531:
case 222:
case 1583:
case 2081:
case 785:
case 327:
case 1324:
case 1312:
case 1120:
case 811:
case 2286:
case 2607:
case 129:
case 4040:
case 1766:
case 1880:
case 1999:
case 3249:
case 170:
case 4034:
case 1140:
case 1874:
case 957:
case 2599:
case 3715:
case 2689:
case 97:
case 4047:
case 1340:
case 454:
case 643:
case 1646:
case 33:
case 3274:
case 2728:
case 3984:
case 3597:
case 634:
case 1604:
case 457:
case 2579:
case 143:
case 362:
case 3494:
case 4021:
case 994:
case 2112:
case 2742:
case 1076:
case 1884:
case 167:
case 1714:
case 3156:
case 2195:
case 1841:
case 3251:
case 2064:
case 391:
case 743:
case 2857:
case 24:
case 3892:
case 250:
case 136:
case 600:
case 38:
case 3188:
case 2246:
case 1060:
case 2878:
case 1823:
case 2348:
case 3268:
case 2481:
case 3772:
case 87:
case 726:
case 2450:
case 3223:
case 1716:
case 1239:
case 1240:
case 326:
case 2636:
case 477:
case 3579:
case 3509:
case 149:
case 456:
case 1426:
case 1386:
case 1045:
case 510:
case 1943:
case 290:
case 2708:
case 3960:
case 382:
case 1412:
case 85:
case 3007:
case 1761:
case 3753:
case 2779:
case 744:
case 227:
case 1514:
case 1390:
case 1163:
case 608:
case 2821:
case 349:
case 79:
case 1819:
case 2482:
case 3044:
case 658:
case 2598:
case 2320:
case 1206:
case 2505:
case 1041:
case 592:
case 4088:
case 1291:
case 3965:
case 2458:
case 3454:
case 1083:
case 2428:
case 1518:
case 3131:
case 3477:
case 2012:
case 2983:
case 1551:
case 1267:
case 172:
case 1837:
case 1929:
case 1843:
case 570:
case 662:
case 2994:
case 459:
case 1484:
case 3976:
case 1011:
case 2974:
case 1826:
case 757:
case 1231:
case 1496:
case 2703:
case 2133:
case 3548:
case 289:
case 2965:
case 2205:
case 3108:
case 45:
case 1229:
case 1985:
case 218:
case 2262:
case 1104:
case 3815:
case 723:
case 3999:
case 3937:
case 2263:
case 531:
case 1505:
case 2594:
case 1006:
case 3336:
case 973:
case 2476:
case 78:
case 680:
case 2218:
case 4009:
case 927:
case 373:
case 1684:
case 2421:
case 376:
case 970:
case 2347:
case 1416:
case 1641:
case 1490:
case 3857:
case 3051:
case 395:
case 1726:
case 3654:
case 707:
case 1133:
case 2718:
case 937:
case 3339:
case 1080:
case 664:
case 3877:
case 1775:
case 1002:
case 1700:
case 2696:
case 642:
case 672:
case 708:
case 3211:
case 1824:
case 3497:
case 3319:
case 2595:
case 1557:
case 139:
case 272:
case 800:
case 1682:
case 2981:
case 1334:
case 1445:
case 2256:
case 2255:
case 2724:
case 1578:
case 3519:
case 1189:
case 4052:
case 2756:
case 1702:
case 2149:
case 252:
case 958:
case 1910:
case 4085:
case 3005:
case 1793:
case 3631:
case 1650:
case 1619:
case 1727:
case 1177:
case 786:
case 3511:
case 3787:
case 3147:
case 411:
case 1467:
case 1404:
case 2544:
case 721:
case 2363:
case 620:
case 2390:
case 3137:
case 1622:
case 3667:
case 96:
case 108:
case 3845:
case 1906:
case 2567:
case 992:
case 1306:
case 46:
case 3055:
case 1430:
case 3536:
case 897:
case 2358:
case 1598:
case 3846:
case 2671:
case 1964:
case 3326:
case 3245:
case 176:
case 1050:
case 208:
case 3875:
case 228:
case 1900:
case 3463:
case 942:
case 2444:
case 1112:
case 3169:
case 2219:
case 829:
case 341:
case 1144:
case 51:
case 979:
case 554:
case 291:
case 833:
case 3587:
case 3430:
case 2811:
case 3150:
case 856:
case 231:
case 2642:
case 3052:
case 367:
case 144:
case 248:
case 2432:
case 3904:
case 1770:
case 1607:
case 1844:
case 354:
case 2861:
case 3466:
case 603:
case 1695:
case 3337:
case 3640:
case 3194:
case 40:
case 3231:
case 1294:
case 3491:
case 3134:
case 2279:
case 4062:
case 2145:
case 2379:
case 694:
case 3990:
case 1933:
case 1677:
case 2667:
case 625:
case 3817:
case 3341:
case 598:
case 2099:
case 2213:
case 3423:
case 1937:
case 2747:
case 2941:
case 3643:
case 2184:
case 655:
case 3498:
case 914:
case 2470:
case 1978:
case 1481:
case 936:
case 935:
case 562:
case 2815:
case 3361:
case 207:
case 3539:
case 3191:
case 2541:
case 2940:
case 763:
case 3516:
case 1842:
case 3072:
case 3025:
case 3843:
case 3632:
case 1784:
case 2193:
case 1328:
case 1216:
case 2697:
case 2204:
case 4074:
case 1142:
case 29:
case 3945:
case 607:
case 2209:
case 492:
case 2658:
case 3752:
case 1043:
case 1013:
case 2234:
case 44:
case 2557:
case 3075:
case 2370:
case 2240:
case 490:
case 2501:
case 1487:
case 1998:
case 2637:
case 2693:
case 168:
case 2351:
case 2653:
case 4032:
case 98:
case 2767:
case 1956:
case 2769:
case 2540:
case 3292:
case 737:
case 3321:
case 1475:
case 1836:
case 3438:
case 1464:
case 3408:
case 3310:
case 2669:
case 1577:
case 1432:
case 964:
case 1533:
case 2951:
case 2161:
case 2584:
case 282:
case 3375:
case 3370:
case 1888:
case 1477:
case 1019:
case 1953:
case 21:
case 1919:
case 675:
case 3819:
case 3090:
case 3886:
case 1591:
case 509:
case 1255:
case 621:
case 2182:
case 2787:
case 1996:
case 1047:
case 3742:
case 1078:
case 3125:
case 2719:
case 1145:
case 2083:
case 1399:
case 118:
case 1762:
case 3317:
case 1865:
case 2936:
case 2824:
case 3427:
case 2442:
case 2828:
case 3529:
case 1876:
case 4051:
case 1546:
case 678:
case 1804:
case 4025:
case 3382:
case 39:
case 2362:
case 470:
case 3119:
case 991:
case 3595:
case 89:
case 1802:
case 2215:
case 121:
case 2271:
case 2715:
case 3630:
case 2601:
case 2502:
case 1463:
case 4073:
case 2506:
case 433:
case 695:
case 2464:
case 2189:
case 2908:
case 125:
case 3839:
case 676:
case 496:
case 4087:
case 1381:
case 1618:
case 2919:
case 2676:
case 1602:
case 2300:
case 334:
case 514:
case 324:
case 2451:
case 522:
case 3344:
case 1974:
case 257:
case 406:
case 1628:
case 3367:
case 976:
case 1357:
case 3468:
case 3861:
case 977:
case 195:
case 2498:
case 2625:
case 3115:
case 1554:
case 1127:
case 3816:
case 1799:
case 3479:
case 335:
case 344:
case 1444:
case 1709:
case 1746:
case 2156:
case 1379:
case 41:
case 3885:
case 1095:
case 3974:
case 2833:
case 4001:
case 3357:
case 2086:
case 2745:
case 423:
case 1812:
case 1857:
case 3193:
case 301:
case 1811:
case 2388:
case 3354:
case 3030:
case 3628:
case 1922:
case 3783:
case 1207:
case 263:
case 2395:
case 791:
case 3098:
case 3957:
case 1407:
case 1848:
case 2085:
case 3095:
case 552:
case 4094:
case 1087:
case 1895:
case 171:
case 2355:
case 627:
case 1195:
case 2115:
case 3447:
case 1768:
case 2345:
case 3189:
case 3701:
case 3673:
case 3084:
case 816:
case 2471:
case 4036:
case 233:
case 2575:
case 1864:
case 2368:
case 1780:
case 3403:
case 3580:
case 545:
case 234:
case 1520:
case 1469:
case 3977:
case 2438:
case 2953:
case 453:
case 2710:
case 442:
case 2058:
case 1911:
case 3452:
case 1410:
case 2660:
case 1954:
case 2530:
case 2985:
case 2466:
case 2961:
case 911:
case 2684:
case 3645:
case 4045:
case 3880:
case 3660:
case 1751:
case 1950:
case 3032:
case 2979:
case 2973:
case 1757:
case 971:
case 2881:
case 50:
case 2630:
case 3649:
case 3123:
case 1966:
case 2049:
case 576:
case 1737:
case 3106:
case 3733:
case 2977:
case 1090:
case 2588:
case 1486:
case 3475:
case 1585:
case 2895:
case 2863:
case 3113:
case 4005:
case 2790:
case 1617:
case 1795:
case 436:
case 2434:
case 2663:
case 3520:
case 2668:
case 497:
case 221:
case 1197:
case 3395:
case 2518:
case 2029:
case 493:
case 2294:
case 2336:
case 2227:
case 2912:
case 3096:
case 2249:
case 3299:
case 2236:
case 2889:
case 302:
case 3650:
case 974:
case 2783:
case 3331:
case 1791:
case 368:
case 1534:
case 3476:
case 3808:
case 1447:
case 1411:
case 2892:
case 2764:
case 1580:
case 2139:
case 2035:
case 2737:
case 2078:
case 538:
case 4078:
case 2278:
case 2581:
case 150:
case 3637:
case 2583:
case 3616:
case 2792:
case 3114:
case 2103:
case 347:
case 3478:
case 3450:
case 3657:
case 705:
case 827:
case 803:
case 3353:
case 1148:
case 931:
case 3402:
case 399:
case 4019:
case 1474:
case 984:
case 2885:
case 3019:
case 3355:
case 3762:
case 1182:
case 838:
case 2206:
case 3130:
case 2014:
case 3014:
case 1945:
case 2893:
case 2845:
case 3610:
case 1282:
case 3995:
case 3582:
case 848:
case 1210:
case 2008:
case 1088:
case 2950:
case 2212:
case 3420:
case 3593:
case 3686:
case 3033:
case 270:
case 978:
case 1878:
case 3230:
case 1794:
case 1610:
case 2110:
case 1288:
case 919:
case 2829:
case 1661:
case 2272:
case 717:
case 3173:
case 410:
case 915:
case 1589:
case 773:
case 2332:
case 4022:
case 2921:
case 2305:
case 3259:
case 407:
case 3069:
case 3863:
case 488:
case 1570:
case 918:
case 2766:
case 3856:
case 3930:
case 3858:
case 2282:
case 3617:
case 3277:
case 1079:
case 200:
case 116:
case 3564:
case 2990:
case 1492:
case 2220:
case 1504:
case 802:
case 1668:
case 561:
case 3950:
case 2142:
case 3792:
case 57:
case 1645:
case 355:
case 2452:
case 2226:
case 4023:
case 3559:
case 1446:
case 1054:
case 1326:
case 981:
case 147:
case 2512:
case 2248:
case 1150:
case 2873:
case 1398:
case 3029:
case 1872:
case 5:
case 1408:
case 2702:
case 377:
case 849:
case 342:
case 429:
case 60:
case 3495:
case 1034:
case 2052:
case 2920:
case 1341:
case 2321:
case 3439:
case 3080:
case 3749:
case 2455:
case 1377:
case 3404:
case 2382:
case 3954:
case 2777:
case 2340:
case 2333:
case 3352:
case 1575:
case 1350:
case 2686:
case 3691:
case 130:
case 704:
case 2273:
case 2757:
case 3074:
case 3507:
case 681:
case 2731:
case 2679:
case 1307:
case 1946:
case 692:
case 2423:
case 473:
case 2794:
case 3590:
case 1164:
case 1516:
case 3523:
case 2483:
case 3963:
case 1067:
case 2101:
case 3048:
case 357:
case 180:
case 1380:
case 3042:
case 2876:
case 2232:
case 2938:
case 3928:
case 161:
case 3323:
case 3279:
case 980:
case 3470:
case 2577:
case 1461:
case 4075:
case 437:
case 1629:
case 771:
case 751:
case 1227:
case 1482:
case 736:
case 1168:
case 4071:
case 3756:
case 3124:
case 526:
case 303:
case 3737:
case 4063:
case 1829:
case 2179:
case 3484:
case 3275:
case 3531:
case 1948:
case 465:
case 844:
case 841:
case 2429:
case 447:
case 1032:
case 194:
case 2152:
case 2231:
case 1905:
case 725:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1650258001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,];
var gg_b = "1650258001/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
