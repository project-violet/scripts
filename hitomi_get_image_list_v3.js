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
var o = 0;
switch (g) {
case 1374:
case 3361:
case 675:
case 870:
case 3156:
case 213:
case 2106:
case 3633:
case 1372:
case 2020:
case 1378:
case 2887:
case 3548:
case 1431:
case 1925:
case 3094:
case 2401:
case 2303:
case 1928:
case 3795:
case 1555:
case 3083:
case 3783:
case 3112:
case 299:
case 639:
case 1248:
case 3780:
case 2720:
case 3971:
case 3106:
case 2376:
case 1203:
case 1056:
case 3689:
case 3894:
case 3208:
case 995:
case 1181:
case 2380:
case 3103:
case 629:
case 1350:
case 2451:
case 3639:
case 322:
case 1718:
case 1730:
case 2993:
case 3169:
case 1671:
case 338:
case 686:
case 2280:
case 2910:
case 1025:
case 542:
case 1324:
case 3180:
case 3721:
case 2547:
case 604:
case 3122:
case 3558:
case 2542:
case 2876:
case 3742:
case 261:
case 1872:
case 450:
case 4034:
case 2066:
case 1885:
case 1800:
case 2352:
case 3349:
case 4023:
case 100:
case 2599:
case 3286:
case 1048:
case 2055:
case 1284:
case 2879:
case 2403:
case 1939:
case 2213:
case 1021:
case 843:
case 2729:
case 2475:
case 381:
case 3021:
case 1272:
case 2408:
case 3791:
case 3462:
case 414:
case 3424:
case 968:
case 3179:
case 3524:
case 132:
case 3650:
case 952:
case 285:
case 12:
case 37:
case 1412:
case 1974:
case 827:
case 3951:
case 3336:
case 3607:
case 3986:
case 3166:
case 75:
case 1571:
case 1315:
case 1342:
case 1200:
case 510:
case 2975:
case 371:
case 9:
case 584:
case 822:
case 556:
case 2176:
case 2130:
case 34:
case 2207:
case 3441:
case 2348:
case 2603:
case 2716:
case 2240:
case 580:
case 1995:
case 3562:
case 3567:
case 357:
case 2480:
case 1466:
case 1791:
case 2128:
case 5:
case 324:
case 883:
case 3849:
case 2021:
case 3409:
case 587:
case 2227:
case 60:
case 3251:
case 1809:
case 23:
case 1522:
case 1183:
case 3606:
case 4007:
case 2392:
case 3955:
case 736:
case 2588:
case 3341:
case 1223:
case 2023:
case 970:
case 2782:
case 2574:
case 2479:
case 108:
case 332:
case 3717:
case 4056:
case 2664:
case 1692:
case 2045:
case 3779:
case 2688:
case 187:
case 1929:
case 275:
case 540:
case 1987:
case 1476:
case 1743:
case 1897:
case 331:
case 3062:
case 611:
case 3998:
case 1381:
case 4044:
case 2342:
case 949:
case 3871:
case 2834:
case 3363:
case 1019:
case 1700:
case 283:
case 2995:
case 4066:
case 1900:
case 2504:
case 4009:
case 3605:
case 576:
case 3074:
case 1455:
case 2616:
case 3664:
case 485:
case 982:
case 545:
case 1515:
case 1769:
case 2136:
case 3638:
case 2826:
case 2275:
case 2515:
case 586:
case 2992:
case 1626:
case 199:
case 957:
case 2235:
case 755:
case 486:
case 979:
case 3765:
case 1852:
case 2008:
case 1977:
case 3269:
case 2334:
case 1080:
case 2544:
case 1611:
case 2528:
case 2976:
case 3418:
case 2972:
case 3454:
case 2501:
case 1328:
case 603:
case 3214:
case 2393:
case 1290:
case 3877:
case 2272:
case 1250:
case 2916:
case 1003:
case 3026:
case 2150:
case 40:
case 3087:
case 1863:
case 2283:
case 3845:
case 3834:
case 1475:
case 4082:
case 2858:
case 177:
case 3945:
case 2746:
case 3174:
case 1722:
case 1102:
case 1598:
case 1084:
case 2488:
case 3825:
case 3660:
case 407:
case 2557:
case 1736:
case 224:
case 3988:
case 2553:
case 1398:
case 1182:
case 1232:
case 1134:
case 29:
case 2405:
case 3173:
case 918:
case 3127:
case 1963:
case 2236:
case 2805:
case 401:
case 3600:
case 2242:
case 2962:
case 3862:
case 1550:
case 31:
case 456:
case 986:
case 154:
case 3581:
case 440:
case 3193:
case 3158:
case 3077:
case 1828:
case 2029:
case 3304:
case 3165:
case 1325:
case 2386:
case 2725:
case 2789:
case 3590:
case 872:
case 382:
case 885:
case 1439:
case 383:
case 3757:
case 3851:
case 1370:
case 2382:
case 3917:
case 1127:
case 259:
case 2933:
case 1681:
case 2787:
case 1738:
case 3724:
case 230:
case 2323:
case 1997:
case 3382:
case 3232:
case 2141:
case 1066:
case 3544:
case 3219:
case 3207:
case 854:
case 1377:
case 3926:
case 3670:
case 104:
case 388:
case 3995:
case 161:
case 650:
case 3534:
case 2419:
case 2164:
case 232:
case 1396:
case 3114:
case 210:
case 227:
case 851:
case 4001:
case 225:
case 1851:
case 1157:
case 3541:
case 3234:
case 1988:
case 2142:
case 754:
case 2868:
case 1235:
case 1570:
case 3763:
case 2948:
case 2701:
case 3794:
case 2848:
case 2399:
case 69:
case 2590:
case 2980:
case 3760:
case 791:
case 3746:
case 771:
case 3006:
case 906:
case 1517:
case 1124:
case 3952:
case 1625:
case 239:
case 2009:
case 605:
case 3100:
case 256:
case 1363:
case 758:
case 21:
case 1395:
case 330:
case 337:
case 1926:
case 2110:
case 3997:
case 1018:
case 326:
case 215:
case 1635:
case 3655:
case 95:
case 1217:
case 1064:
case 3049:
case 2540:
case 3168:
case 1411:
case 539:
case 3263:
case 2832:
case 4014:
case 1468:
case 3829:
case 643:
case 1368:
case 3801:
case 1565:
case 3407:
case 120:
case 3226:
case 2099:
case 2436:
case 1155:
case 3872:
case 3700:
case 1371:
case 1012:
case 1958:
case 1906:
case 137:
case 3017:
case 3730:
case 2580:
case 159:
case 2424:
case 2831:
case 2454:
case 428:
case 533:
case 4028:
case 2877:
case 698:
case 3469:
case 290:
case 1824:
case 1386:
case 2517:
case 616:
case 1472:
case 876:
case 2791:
case 197:
case 3369:
case 546:
case 1143:
case 3879:
case 3859:
case 1087:
case 2375:
case 1237:
case 1280:
case 660:
case 1527:
case 1166:
case 2270:
case 2977:
case 988:
case 3330:
case 488:
case 399:
case 1349:
case 247:
case 2828:
case 3839:
case 3125:
case 3510:
case 1301:
case 3578:
case 2353:
case 2469:
case 346:
case 2067:
case 3097:
case 1645:
case 1702:
case 805:
case 530:
case 2428:
case 201:
case 641:
case 2143:
case 1606:
case 2431:
case 1312:
case 862:
case 1227:
case 2750:
case 2907:
case 3601:
case 2144:
case 2485:
case 3814:
case 3205:
case 398:
case 2611:
case 877:
case 2527:
case 2328:
case 2853:
case 2309:
case 1688:
case 2119:
case 2974:
case 582:
case 1098:
case 474:
case 3183:
case 1214:
case 1591:
case 3308:
case 2074:
case 3615:
case 4088:
case 2978:
case 3566:
case 2785:
case 4046:
case 4065:
case 3119:
case 2010:
case 2578:
case 2719:
case 3897:
case 3483:
case 1511:
case 1915:
case 468:
case 920:
case 373:
case 1816:
case 1060:
case 1833:
case 83:
case 2870:
case 1797:
case 3947:
case 2915:
case 254:
case 3380:
case 2663:
case 3460:
case 1452:
case 2301:
case 3035:
case 802:
case 1684:
case 112:
case 3009:
case 1803:
case 3071:
case 1219:
case 2697:
case 3110:
case 2579:
case 2864:
case 2965:
case 2279:
case 2897:
case 2217:
case 2234:
case 3800:
case 1333:
case 3133:
case 961:
case 436:
case 2533:
case 2049:
case 3002:
case 3086:
case 4021:
case 1575:
case 2820:
case 579:
case 77:
case 236:
case 2094:
case 2968:
case 496:
case 2214:
case 509:
case 435:
case 3914:
case 1036:
case 3268:
case 518:
case 3907:
case 3532:
case 1711:
case 1491:
case 3985:
case 1436:
case 948:
case 2225:
case 648:
case 2999:
case 728:
case 1224:
case 1115:
case 774:
case 4052:
case 3381:
case 634:
case 1602:
case 3766:
case 1509:
case 1121:
case 2267:
case 76:
case 638:
case 2061:
case 3429:
case 1479:
case 1446:
case 1178:
case 1281:
case 4094:
case 1747:
case 217:
case 2288:
case 1968:
case 207:
case 3402:
case 62:
case 1145:
case 3511:
case 2606:
case 500:
case 3843:
case 157:
case 2918:
case 3455:
case 3050:
case 711:
case 4062:
case 3257:
case 1458:
case 1421:
case 3079:
case 784:
case 2507:
case 2699:
case 1304:
case 3576:
case 971:
case 3681:
case 2232:
case 3117:
case 2781:
case 3239:
case 3405:
case 1994:
case 1040:
case 745:
case 463:
case 2367:
case 3244:
case 3376:
case 659:
case 3427:
case 2077:
case 1537:
case 2811:
case 1326:
case 348:
case 307:
case 548:
case 1254:
case 1814:
case 3610:
case 4089:
case 2692:
case 250:
case 2956:
case 2713:
case 4015:
case 2526:
case 512:
case 2816:
case 231:
case 1000:
case 2418:
case 2180:
case 1053:
case 1944:
case 3082:
case 2955:
case 1614:
case 3942:
case 703:
case 3194:
case 395:
case 4074:
case 3577:
case 2518:
case 1292:
case 3215:
case 2961:
case 706:
case 3977:
case 3932:
case 3498:
case 4057:
case 2767:
case 3837:
case 3090:
case 1749:
case 506:
case 1641:
case 2474:
case 130:
case 3075:
case 2609:
case 118:
case 1742:
case 155:
case 1608:
case 2960:
case 3024:
case 3486:
case 669:
case 817:
case 2277:
case 2229:
case 932:
case 884:
case 3768:
case 3329:
case 3052:
case 2059:
case 3043:
case 3476:
case 912:
case 1295:
case 3426:
case 349:
case 1063:
case 2343:
case 597:
case 3190:
case 3705:
case 1569:
case 362:
case 1983:
case 2952:
case 4040:
case 1934:
case 2284:
case 1228:
case 3150:
case 2243:
case 350:
case 3236:
case 173:
case 2101:
case 1246:
case 190:
case 3728:
case 3184:
case 364:
case 223:
case 2508:
case 1050:
case 647:
case 693:
case 1467:
case 2583:
case 2673:
case 2923:
case 2183:
case 2940:
case 2237:
case 3185:
case 3320:
case 3280:
case 691:
case 355:
case 3595:
case 44:
case 2644:
case 723:
case 2906:
case 1501:
case 1347:
case 1030:
case 2640:
case 2426:
case 2786:
case 1559:
case 1478:
case 268:
case 3175:
case 3287:
case 2042:
case 312:
case 3458:
case 1238:
case 1135:
case 3821:
case 129:
case 3414:
case 863:
case 2815:
case 3266:
case 4053:
case 3904:
case 297:
case 1480:
case 2397:
case 2754:
case 360:
case 840:
case 2098:
case 749:
case 2837:
case 2345:
case 1813:
case 20:
case 146:
case 3422:
case 1046:
case 561:
case 807:
case 1642:
case 3869:
case 3096:
case 212:
case 3632:
case 1403:
case 3571:
case 3305:
case 125:
case 3543:
case 3237:
case 2570:
case 828:
case 1222:
case 1973:
case 2013:
case 128:
case 816:
case 1484:
case 2312:
case 2495:
case 3390:
case 4012:
case 2166:
case 3635:
case 3809:
case 833:
case 2981:
case 25:
case 1500:
case 341:
case 1303:
case 2742:
case 2035:
case 3737:
case 2546:
case 3202:
case 2153:
case 2425:
case 808:
case 3425:
case 1437:
case 534:
case 1189:
case 2489:
case 1821:
case 3823:
case 2458:
case 2319:
case 3:
case 472:
case 1286:
case 359:
case 571:
case 2539:
case 2062:
case 1979:
case 1693:
case 731:
case 3033:
case 4059:
case 1081:
case 1562:
case 2195:
case 2354:
case 1659:
case 3375:
case 2760:
case 1101:
case 2415:
case 3659:
case 1322:
case 3289:
case 386:
case 2601:
case 1531:
case 219:
case 235:
case 1648:
case 2855:
case 3523:
case 49:
case 3045:
case 2409:
case 996:
case 842:
case 1419:
case 2228:
case 366:
case 478:
case 3256:
case 1274:
case 1461:
case 2929:
case 3027:
case 763:
case 1257:
case 3319:
case 2984:
case 2384:
case 1287:
case 3480:
case 3482:
case 1734:
case 476:
case 1677:
case 79:
case 2442:
case 812:
case 2199:
case 352:
case 684:
case 2745:
case 2901:
case 999:
case 984:
case 1359:
case 1914:
case 3160:
case 1116:
case 73:
case 2447:
case 1541:
case 1026:
case 2014:
case 389:
case 2358:
case 3047:
case 856:
case 3919:
case 2193:
case 4005:
case 861:
case 1544:
case 242:
case 3785:
case 3813:
case 2085:
case 3285:
case 39:
case 1108:
case 620:
case 148:
case 3472:
case 707:
case 3327:
case 3594:
case 2158:
case 4010:
case 841:
case 2040:
case 2078:
case 2749:
case 4048:
case 850:
case 1530:
case 3152:
case 3928:
case 3176:
case 2509:
case 216:
case 1009:
case 1532:
case 2768:
case 560:
case 3186:
case 99:
case 3264:
case 1269:
case 3586:
case 1297:
case 406:
case 3634:
case 2556:
case 3014:
case 3963:
case 2985:
case 1794:
case 977:
case 2766:
case 3723:
case 249:
case 1388:
case 2779:
case 3116:
case 1717:
case 1810:
case 645:
case 457:
case 1507:
case 384:
case 980:
case 3706:
case 3491:
case 3878:
case 3354:
case 1971:
case 1401:
case 1107:
case 1638:
case 2531:
case 2414:
case 4068:
case 291:
case 2463:
case 2617:
case 353:
case 1258:
case 1701:
case 2568:
case 3092:
case 3059:
case 887:
case 2653:
case 3561:
case 2116:
case 1417:
case 3135:
case 2675:
case 2581:
case 3622:
case 3691:
case 1105:
case 303:
case 1196:
case 2007:
case 443:
case 238:
case 116:
case 2293:
case 3466:
case 205:
case 3734:
case 2438:
case 2046:
case 1144:
case 867:
case 115:
case 3958:
case 2774:
case 3001:
case 3922:
case 2196:
case 2724:
case 2468:
case 3531:
case 2705:
case 169:
case 3128:
case 1309:
case 245:
case 3992:
case 124:
case 1655:
case 3621:
case 2359:
case 695:
case 429:
case 1160:
case 3901:
case 504:
case 3372:
case 1264:
case 838:
case 1822:
case 1218:
case 1454:
case 2337:
case 2226:
case 1898:
case 2806:
case 824:
case 3987:
case 1869:
case 65:
case 2095:
case 1607:
case 2652:
case 2276:
case 2776:
case 3412:
case 2600:
case 134:
case 3819:
case 1918:
case 759:
case 3970:
case 2756:
case 2900:
case 1233:
case 3064:
case 1760:
case 2804:
case 3041:
case 3008:
case 3990:
case 2632:
case 2398:
case 1132:
case 2036:
case 3465:
case 181:
case 989:
case 742:
case 2630:
case 801:
case 3663:
case 3492:
case 1239:
case 2807:
case 393:
case 744:
case 2830:
case 3802:
case 1241:
case 3321:
case 1210:
case 2744:
case 719:
case 54:
case 1819:
case 3925:
case 3974:
case 202:
case 2634:
case 3004:
case 2592:
case 1094:
case 479:
case 768:
case 1379:
case 323:
case 992:
case 1808:
case 2549:
case 2505:
case 951:
case 1901:
case 1756:
case 815:
case 3273:
case 3767:
case 3830:
case 1633:
case 2773:
case 3171:
case 175:
case 279:
case 1171:
case 2450:
case 4079:
case 4011:
case 1715:
case 866:
case 3679:
case 3162:
case 93:
case 3527:
case 1679:
case 2174:
case 2626:
case 1369:
case 340:
case 521:
case 2575:
case 3046:
case 1907:
case 1965:
case 1778:
case 998:
case 3346:
case 2572:
case 2327:
case 4018:
case 17:
case 3693:
case 653:
case 3847:
case 2103:
case 72:
case 3198:
case 2628:
case 1840:
case 577:
case 52:
case 2032:
case 1716:
case 78:
case 3841:
case 3676:
case 1842:
case 165:
case 2682:
case 1668:
case 396:
case 3695:
case 3367:
case 1549:
case 4037:
case 1091:
case 3055:
case 114:
case 2983:
case 3201:
case 2082:
case 3032:
case 2220:
case 1603:
case 3720:
case 2206:
case 2752:
case 363:
case 1109:
case 3157:
case 3850:
case 2614:
case 378:
case 3752:
case 929:
case 1252:
case 1902:
case 1112:
case 2308:
case 449:
case 1831:
case 184:
case 1438:
case 907:
case 565:
case 3613:
case 182:
case 1790:
case 2377:
case 2169:
case 274:
case 3362:
case 2084:
case 1502:
case 50:
case 1481:
case 2638:
case 1198:
case 3522:
case 87:
case 1266:
case 473:
case 1637:
case 1236:
case 1574:
case 3560:
case 2060:
case 3961:
case 4075:
case 3461:
case 1069:
case 1953:
case 1610:
case 3172:
case 3199:
case 642:
case 983:
case 2643:
case 730:
case 3404:
case 1220:
case 4032:
case 1691:
case 2743:
case 86:
case 2823:
case 1373:
case 3673:
case 2455:
case 2151:
case 1948:
case 619:
case 35:
case 336:
case 1583:
case 2997:
case 2371:
case 2231:
case 1767:
case 3399:
case 2800:
case 2039:
case 3231:
case 1682:
case 3682:
case 420:
case 1793:
case 248:
case 1195:
case 2223:
case 3029:
case 852:
case 562:
case 969:
case 2763:
case 1276:
case 1854:
case 2017:
case 1323:
case 1964:
case 194:
case 1894:
case 2140:
case 3209:
case 2903:
case 2727:
case 2922:
case 494:
case 1588:
case 2543:
case 672:
case 2753:
case 1623:
case 3938:
case 1950:
case 3743:
case 4092:
case 3898:
case 751:
case 3668:
case 1061:
case 2801:
case 258:
case 1878:
case 3625:
case 934:
case 3261:
case 2631:
case 3146:
case 1952:
case 1364:
case 690:
case 2030:
case 568:
case 1673:
case 516:
case 3374:
case 117:
case 1759:
case 1049:
case 4002:
case 1169:
case 109:
case 2561:
case 2320:
case 1862:
case 3145:
case 2502:
case 1789:
case 1846:
case 1887:
case 3129:
case 3887:
case 2693:
case 193:
case 1740:
case 2346:
case 3121:
case 3546:
case 2289:
case 3612:
case 2845:
case 4041:
case 3484:
case 3962:
case 864:
case 2959:
case 3969:
case 654:
case 1498:
case 2317:
case 91:
case 3521:
case 3506:
case 2026:
case 3966:
case 3784:
case 1231:
case 1804:
case 1047:
case 1307:
case 637:
case 3906:
case 2803:
case 3538:
case 3187:
case 2649:
case 3964:
case 269:
case 2676:
case 2330:
case 3463:
case 2453:
case 3310:
case 3005:
case 1139:
case 848:
case 2439:
case 4081:
case 2665:
case 2302:
case 82:
case 2758:
case 2407:
case 36:
case 1140:
case 3528:
case 1777:
case 1366:
case 3889:
case 1873:
case 2171:
case 1699:
case 424:
case 3687:
case 624:
case 418:
case 2905:
case 1020:
case 3860:
case 2608:
case 1619:
case 2155:
case 2843:
case 1860:
case 1980:
case 1221:
case 3690:
case 1592:
case 835:
case 1936:
case 1612:
case 2472:
case 444:
case 2383:
case 3838:
case 2651:
case 3499:
case 292:
case 433:
case 1796:
case 2118:
case 2733:
case 2146:
case 141:
case 923:
case 670:
case 2690:
case 3449:
case 612:
case 594:
case 2411:
case 875:
case 441:
case 963:
case 2114:
case 1389:
case 2996:
case 3833:
case 3967:
case 439:
case 2979:
case 41:
case 1006:
case 2044:
case 3782:
case 3015:
case 846:
case 3360:
case 3091:
case 3124:
case 3848:
case 1855:
case 2389:
case 1240:
case 3345:
case 3243:
case 1776:
case 536:
case 3262:
case 3662:
case 3044:
case 878:
case 2706:
case 953:
case 1023:
case 2246:
case 1899:
case 1394:
case 3475:
case 1427:
case 3956:
case 2723:
case 158:
case 38:
case 252:
case 2629:
case 2662:
case 3309:
case 3159:
case 628:
case 3699:
case 342:
case 2926:
case 2410:
case 1131:
case 2859:
case 397:
case 740:
case 598:
case 53:
case 2950:
case 3696:
case 1027:
case 85:
case 3147:
case 626:
case 1996:
case 1093:
case 1698:
case 1568:
case 3459:
case 2357:
case 271:
case 3684:
case 3277:
case 2063:
case 1137:
case 2861:
case 2576:
case 1092:
case 1334:
case 2200:
case 2369:
case 1416:
case 1957:
case 3714:
case 3807:
case 3574:
case 501:
case 1390:
case 2292:
case 3019:
case 3711:
case 1792:
case 1893:
case 3954:
case 1811:
case 564:
case 1317:
case 3716:
case 3979:
case 1205:
case 1888:
case 944:
case 3056:
case 640:
case 2365:
case 1356:
case 2712:
case 3736:
case 2245:
case 2163:
case 890:
case 618:
case 776:
case 2851:
case 1004:
case 180:
case 1470:
case 1938:
case 2825:
case 1418:
case 3680:
case 335:
case 939:
case 3669:
case 1674:
case 374:
case 787:
case 1856:
case 234:
case 2203:
case 2250:
case 3614:
case 1015:
case 1305:
case 1620:
case 769:
case 1547:
case 819:
case 3564:
case 3909:
case 3149:
case 2911:
case 1051:
case 3428:
case 2942:
case 2374:
case 1175:
case 741:
case 28:
case 3108:
case 97:
case 3500:
case 2423:
case 2314:
case 3136:
case 2967:
case 3747:
case 3960:
case 3516:
case 2584:
case 3882:
case 2708:
case 2262:
case 1892:
case 2129:
case 1192:
case 1535:
case 1089:
case 4026:
case 1768:
case 410:
case 1597:
case 3642:
case 4067:
case 1408:
case 3296:
case 709:
case 427:
case 2849:
case 1784:
case 1940:
case 904:
case 3436:
case 171:
case 596:
case 304:
case 372:
case 3657:
case 3727:
case 2924:
case 3653:
case 924:
case 967:
case 3406:
case 2622:
case 3307:
case 3598:
case 1799:
case 3213:
case 2075:
case 3772:
case 2185:
case 1043:
case 2177:
case 206:
case 2120:
case 2846:
case 1563:
case 705:
case 461:
case 522:
case 515:
case 2908:
case 3778:
case 3036:
case 183:
case 3060:
case 2642:
case 1669:
case 3627:
case 67:
case 2635:
case 240:
case 2552:
case 1687:
case 773:
case 825:
case 2589:
case 1593:
case 3229:
case 2607:
case 2249:
case 308:
case 2963:
case 1920:
case 1935:
case 1110:
case 559:
case 33:
case 1746:
case 2117:
case 3937:
case 244:
case 602:
case 2483:
case 3888:
case 2112:
case 2624:
case 905:
case 3893:
case 3297:
case 2555:
case 631:
case 909:
case 2258:
case 1621:
case 1031:
case 3744:
case 3741:
case 2641:
case 426:
case 665:
case 3944:
case 685:
case 4042:
case 2694:
case 2867:
case 2363:
case 4064:
case 1729:
case 3351:
case 4006:
case 3140:
case 4051:
case 2187:
case 2869:
case 2145:
case 3123:
case 1895:
case 3535:
case 4013:
case 3774:
case 1880:
case 3709:
case 1314:
case 2683:
case 3552:
case 697:
case 794:
case 1022:
case 2598:
case 1775:
case 2899:
case 3416:
case 402:
case 1990:
case 3188:
case 3224:
case 2633:
case 1644:
case 2639:
case 2680:
case 2871:
case 3895:
case 1848:
case 2914:
case 1843:
case 2698:
case 2748:
case 2538:
case 873:
case 2931:
case 4076:
case 1028:
case 2917:
case 3756:
case 2033:
case 1686:
case 421:
case 1435:
case 2054:
case 503:
case 716:
case 2041:
case 4054:
case 2585:
case 1099:
case 131:
case 721:
case 1884:
case 578:
case 3471:
case 1496:
case 365:
case 490:
case 2091:
case 3324:
case 2751:
case 3815:
case 3477:
case 913:
case 2261:
case 1942:
case 422:
case 1629:
case 4095:
case 3868:
case 288:
case 1493:
case 1445:
case 1839:
case 2378:
case 3294:
case 3630:
case 145:
case 2883:
case 2932:
case 1338:
case 1577:
case 2686:
case 3550:
case 1956:
case 2850:
case 2287:
case 434:
case 1097:
case 2088:
case 1680:
case 1156:
case 553:
case 1807:
case 2813:
case 89:
case 3788:
case 3636:
case 1042:
case 2810:
case 3025:
case 3365:
case 1197:
case 2239:
case 2347:
case 3989:
case 2172:
case 1138:
case 3272:
case 3874:
case 2274:
case 368:
case 1643:
case 178:
case 2702:
case 2670:
case 770:
case 3240:
case 1387:
case 2930:
case 196:
case 946:
case 800:
case 531:
case 3356:
case 2610:
case 3241:
case 1519:
case 625:
case 122:
case 3525:
case 1966:
case 1011:
case 2341:
case 2467:
case 1741:
case 651:
case 188:
case 1576:
case 3968:
case 3740:
case 499:
case 2498:
case 1689:
case 2863:
case 2167:
case 927:
case 1630:
case 4093:
case 3732:
case 2445:
case 3419:
case 1554:
case 2503:
case 2567:
case 2722:
case 734:
case 2093:
case 2548:
case 1308:
case 3250:
case 487:
case 3105:
case 2381:
case 3023:
case 2394:
case 767:
case 4:
case 2412:
case 376:
case 1462:
case 635:
case 3792:
case 2769:
case 1361:
case 2484:
case 1191:
case 1279:
case 4073:
case 1288:
case 3435:
case 2874:
case 3073:
case 694:
case 3181:
case 3420:
case 320:
case 301:
case 975:
case 3084:
case 3255:
case 3629:
case 2307:
case 523:
case 1120:
case 3151:
case 1732:
case 1820:
case 1567:
case 756:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1645329601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,];
var gg_b = "1645329601/";

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
