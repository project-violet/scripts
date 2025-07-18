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
case 1667:
case 2461:
case 1462:
case 3414:
case 1955:
case 3986:
case 2704:
case 1235:
case 1419:
case 2991:
case 2577:
case 1218:
case 3097:
case 3589:
case 861:
case 1584:
case 3931:
case 2817:
case 1355:
case 2208:
case 4021:
case 383:
case 3254:
case 3386:
case 2185:
case 424:
case 2129:
case 665:
case 3167:
case 1714:
case 3226:
case 3867:
case 1458:
case 2533:
case 1581:
case 517:
case 1259:
case 2582:
case 1536:
case 289:
case 3411:
case 2701:
case 2464:
case 715:
case 1540:
case 1807:
case 410:
case 480:
case 759:
case 1622:
case 442:
case 785:
case 963:
case 3446:
case 3153:
case 3430:
case 3331:
case 1084:
case 2106:
case 3290:
case 1243:
case 3408:
case 716:
case 786:
case 3128:
case 3641:
case 378:
case 2735:
case 948:
case 3752:
case 2077:
case 3971:
case 898:
case 3680:
case 3597:
case 2230:
case 1103:
case 2211:
case 2950:
case 1365:
case 3795:
case 1770:
case 3849:
case 194:
case 2747:
case 14:
case 3974:
case 513:
case 1628:
case 1141:
case 2573:
case 1841:
case 205:
case 3261:
case 844:
case 2545:
case 1116:
case 610:
case 994:
case 2214:
case 709:
case 3603:
case 1495:
case 83:
case 838:
case 2033:
case 1201:
case 2202:
case 3723:
case 2082:
case 822:
case 2588:
case 3768:
case 2451:
case 1657:
case 1180:
case 351:
case 2350:
case 1452:
case 465:
case 2566:
case 2904:
case 1755:
case 957:
case 1897:
case 4045:
case 59:
case 3439:
case 455:
case 489:
case 750:
case 1197:
case 3362:
case 3238:
case 3544:
case 242:
case 2688:
case 210:
case 2791:
case 911:
case 3710:
case 2673:
case 2820:
case 2969:
case 981:
case 2400:
case 1930:
case 1528:
case 4088:
case 2021:
case 2912:
case 2499:
case 1250:
case 1022:
case 2645:
case 3927:
case 3580:
case 3876:
case 3176:
case 3919:
case 3697:
case 1739:
case 2056:
case 103:
case 2304:
case 3358:
case 4037:
case 2478:
case 2024:
case 1486:
case 406:
case 3455:
case 2637:
case 157:
case 3007:
case 544:
case 1902:
case 1346:
case 266:
case 1311:
case 1640:
case 1063:
case 1522:
case 2347:
case 1636:
case 1308:
case 3479:
case 1189:
case 2935:
case 2359:
case 561:
case 2292:
case 39:
case 1889:
case 1405:
case 1125:
case 619:
case 3771:
case 3465:
case 3044:
case 3323:
case 3368:
case 3232:
case 1798:
case 2487:
case 3995:
case 2682:
case 2750:
case 3689:
case 2415:
case 851:
case 2947:
case 1260:
case 3625:
case 4077:
case 3016:
case 3507:
case 107:
case 3840:
case 2335:
case 1684:
case 3181:
case 3299:
case 887:
case 3881:
case 3498:
case 606:
case 3200:
case 3080:
case 2472:
case 2896:
case 153:
case 792:
case 1471:
case 1716:
case 377:
case 3940:
case 4051:
case 2159:
case 1389:
case 662:
case 1108:
case 1005:
case 16:
case 168:
case 2742:
case 3384:
case 1993:
case 1074:
case 1229:
case 2500:
case 1780:
case 3444:
case 2996:
case 1457:
case 3868:
case 2651:
case 3168:
case 3823:
case 2713:
case 2466:
case 2654:
case 3608:
case 2135:
case 3336:
case 38:
case 2038:
case 826:
case 2818:
case 3728:
case 929:
case 2626:
case 2583:
case 554:
case 1393:
case 3763:
case 2532:
case 2706:
case 1870:
case 3098:
case 3749:
case 2396:
case 1623:
case 1217:
case 646:
case 1703:
case 3757:
case 96:
case 1071:
case 699:
case 3852:
case 1744:
case 3480:
case 3592:
case 3381:
case 837:
case 1668:
case 3152:
case 577:
case 1034:
case 1658:
case 1114:
case 2216:
case 1814:
case 3976:
case 3119:
case 191:
case 1242:
case 3565:
case 2609:
case 943:
case 3630:
case 893:
case 3753:
case 4009:
case 775:
case 3579:
case 1102:
case 1213:
case 1627:
case 462:
case 1422:
case 2101:
case 279:
case 1802:
case 2572:
case 1619:
case 1997:
case 58:
case 143:
case 588:
case 51:
case 518:
case 2143:
case 1571:
case 499:
case 290:
case 2661:
case 1086:
case 1467:
case 1206:
case 3598:
case 2104:
case 1662:
case 446:
case 3158:
case 3376:
case 2078:
case 131:
case 2875:
case 2112:
case 1811:
case 3127:
case 2717:
case 3602:
case 3407:
case 2032:
case 1010:
case 991:
case 1130:
case 2515:
case 3502:
case 4072:
case 525:
case 3328:
case 1179:
case 1916:
case 593:
case 3489:
case 3363:
case 3174:
case 221:
case 3105:
case 2942:
case 2306:
case 3425:
case 1165:
case 3349:
case 3273:
case 1980:
case 4038:
case 3698:
case 2913:
case 3781:
case 364:
case 3245:
case 4015:
case 2561:
case 1344:
case 3530:
case 2297:
case 3928:
case 1316:
case 541:
case 1674:
case 630:
case 1605:
case 3546:
case 108:
case 10:
case 2564:
case 3784:
case 1440:
case 2906:
case 749:
case 3963:
case 245:
case 3511:
case 3679:
case 2687:
case 2150:
case 2590:
case 1380:
case 2482:
case 1198:
case 1898:
case 2433:
case 3949:
case 184:
case 2051:
case 2509:
case 326:
case 88:
case 3957:
case 818:
case 3171:
case 81:
case 3014:
case 2678:
case 1686:
case 2061:
case 325:
case 1062:
case 1523:
case 3692:
case 4083:
case 1839:
case 1568:
case 3497:
case 1019:
case 95:
case 4032:
case 2929:
case 2293:
case 2860:
case 3776:
case 246:
case 723:
case 873:
case 1610:
case 2894:
case 2437:
case 2948:
case 3002:
case 299:
case 2632:
case 2526:
case 3233:
case 490:
case 2683:
case 564:
case 2551:
case 3639:
case 341:
case 2289:
case 2191:
case 1892:
case 537:
case 1552:
case 2225:
case 262:
case 479:
case 1797:
case 3367:
case 2090:
case 2329:
case 1855:
case 1595:
case 1634:
case 2385:
case 3886:
case 1058:
case 1155:
case 1027:
case 3131:
case 3831:
case 2917:
case 2699:
case 652:
case 3011:
case 3922:
case 854:
case 2445:
case 1307:
case 2473:
case 526:
case 735:
case 430:
case 158:
case 2720:
case 3277:
case 15:
case 2348:
case 971:
case 2508:
case 3554:
case 604:
case 1100:
case 1800:
case 76:
case 4092:
case 830:
case 3526:
case 2233:
case 1281:
case 1745:
case 3632:
case 3437:
case 399:
case 2002:
case 1236:
case 1:
case 2834:
case 2134:
case 618:
case 1240:
case 2967:
case 729:
case 3678:
case 68:
case 3860:
case 3293:
case 182:
case 2776:
case 112:
case 3160:
case 1788:
case 2497:
case 521:
case 1183:
case 1921:
case 473:
case 4039:
case 747:
case 9:
case 1012:
case 2353:
case 2011:
case 1737:
case 2831:
case 1132:
case 3917:
case 3699:
case 1832:
case 2131:
case 940:
case 1694:
case 982:
case 2046:
case 3720:
case 3348:
case 2367:
case 3488:
case 362:
case 1660:
case 2639:
case 3551:
case 3891:
case 545:
case 1004:
case 1284:
case 2186:
case 1878:
case 3090:
case 1178:
case 3477:
case 1782:
case 3913:
case 2245:
case 2781:
case 41:
case 2514:
case 1650:
case 2328:
case 2740:
case 2502:
case 852:
case 2805:
case 3306:
case 2105:
case 2288:
case 2008:
case 321:
case 1047:
case 2489:
case 2874:
case 2363:
case 2070:
case 731:
case 1966:
case 3687:
case 1543:
case 1496:
case 1172:
case 2871:
case 1777:
case 2665:
case 3509:
case 4079:
case 743:
case 3313:
case 1035:
case 2546:
case 1569:
case 1115:
case 1018:
case 570:
case 2530:
case 1815:
case 1512:
case 2679:
case 345:
case 4065:
case 2784:
case 1337:
case 1094:
case 1973:
case 552:
case 1669:
case 3748:
case 3099:
case 3320:
case 3101:
case 1945:
case 3664:
case 2579:
case 1612:
case 1417:
case 2611:
case 626:
case 3216:
case 3690:
case 3587:
case 1724:
case 127:
case 2767:
case 4030:
case 1861:
case 1604:
case 949:
case 637:
case 1161:
case 330:
case 3609:
case 846:
case 4011:
case 3241:
case 1756:
case 1988:
case 273:
case 996:
case 1060:
case 2976:
case 2407:
case 1601:
case 2827:
case 1373:
case 3032:
case 2602:
case 3717:
case 3083:
case 1448:
case 2722:
case 3203:
case 493:
case 3515:
case 425:
case 720:
case 870:
case 708:
case 3244:
case 4014:
case 3169:
case 1091:
case 1809:
case 1228:
case 3572:
case 3843:
case 3456:
case 3175:
case 3078:
case 3424:
case 254:
case 2858:
case 3804:
case 2168:
case 2065:
case 3996:
case 821:
case 771:
case 2868:
case 2539:
case 1253:
case 2444:
case 3087:
case 579:
case 437:
case 1377:
case 3599:
case 3859:
case 2079:
case 1826:
case 3500:
case 3147:
case 3742:
case 123:
case 2384:
case 1154:
case 995:
case 2221:
case 1222:
case 3578:
case 2895:
case 2195:
case 2749:
case 1766:
case 497:
case 2152:
case 1151:
case 2480:
case 2852:
case 1977:
case 2757:
case 3072:
case 1333:
case 758:
case 3818:
case 135:
case 3135:
case 218:
case 3654:
case 3835:
case 2608:
case 2984:
case 3583:
case 693:
case 3626:
case 1696:
case 1177:
case 1951:
case 2952:
case 417:
case 856:
case 763:
case 985:
case 3633:
case 3750:
case 2232:
case 3487:
case 2884:
case 601:
case 1006:
case 2479:
case 1354:
case 451:
case 365:
case 2184:
case 2278:
case 3347:
case 613:
case 580:
case 1715:
case 3918:
case 2693:
case 298:
case 1738:
case 3935:
case 805:
case 47:
case 1833:
case 1787:
case 244:
case 1351:
case 1013:
case 1182:
case 2881:
case 2299:
case 2923:
case 2181:
case 1450:
case 2352:
case 3196:
case 1585:
case 3677:
case 3896:
case 2968:
case 566:
case 1529:
case 2080:
case 2200:
case 2774:
case 222:
case 3415:
case 1954:
case 3239:
case 2689:
case 23:
case 1234:
case 159:
case 2836:
case 2840:
case 2140:
case 960:
case 1271:
case 186:
case 3969:
case 3820:
case 3673:
case 3120:
case 116:
case 972:
case 1506:
case 767:
case 3645:
case 3298:
case 2927:
case 413:
case 1837:
case 1783:
case 1137:
case 3912:
case 909:
case 2319:
case 794:
case 2786:
case 3566:
case 3904:
case 3791:
case 1361:
case 310:
case 2238:
case 2544:
case 2215:
case 261:
case 3943:
case 3369:
case 1145:
case 3432:
case 2287:
case 1700:
case 3312:
case 3794:
case 1542:
case 366:
case 1085:
case 1205:
case 1188:
case 3304:
case 3375:
case 1491:
case 2176:
case 986:
case 2580:
case 1390:
case 2492:
case 889:
case 67:
case 3024:
case 1961:
case 3478:
case 2962:
case 506:
case 3230:
case 2971:
case 438:
case 43:
case 2752:
case 3246:
case 4016:
case 2264:
case 1613:
case 1227:
case 2795:
case 1166:
case 3211:
case 1459:
case 3537:
case 3106:
case 2305:
case 1258:
case 3806:
case 2209:
case 1447:
case 2641:
case 1520:
case 27:
case 1938:
case 2408:
case 3454:
case 2828:
case 2723:
case 3813:
case 1372:
case 1987:
case 589:
case 2603:
case 703:
case 3451:
case 1096:
case 781:
case 2768:
case 3588:
case 2644:
case 1418:
case 3142:
case 2905:
case 3842:
case 1754:
case 2974:
case 2093:
case 3214:
case 4044:
case 287:
case 757:
case 1606:
case 2261:
case 1338:
case 1262:
case 3759:
case 2910:
case 992:
case 2589:
case 3769:
case 306:
case 2525:
case 842:
case 810:
case 2122:
case 1821:
case 1401:
case 2402:
case 1121:
case 1983:
case 3037:
case 2822:
case 1648:
case 2931:
case 3817:
case 3117:
case 2727:
case 1764:
case 1932:
case 2758:
case 2986:
case 3704:
case 622:
case 132:
case 3461:
case 824:
case 3775:
case 774:
case 63:
case 1629:
case 2334:
case 12:
case 100:
case 3656:
case 3991:
case 3621:
case 3464:
case 1412:
case 3701:
case 932:
case 707:
case 319:
case 2310:
case 3848:
case 2411:
case 1617:
case 389:
case 1332:
case 1268:
case 2153:
case 928:
case 1383:
case 1469:
case 2853:
case 192:
case 3960:
case 866:
case 201:
case 1443:
case 3088:
case 3208:
case 3185:
case 3490:
case 2934:
case 2226:
case 3533:
case 505:
case 1056:
case 2739:
case 3888:
case 667:
case 3205:
case 3029:
case 211:
case 1375:
case 1343:
case 559:
case 1024:
case 585:
case 924:
case 1901:
case 3845:
case 787:
case 3048:
case 3145:
case 309:
case 1369:
case 2346:
case 2330:
case 257:
case 942:
case 1312:
case 980:
case 2311:
case 166:
case 3173:
case 892:
case 3364:
case 3542:
case 2434:
case 3778:
case 3990:
case 1904:
case 2792:
case 3909:
case 142:
case 1688:
case 3361:
case 1791:
case 966:
case 1943:
case 2676:
case 828:
case 77:
case 2930:
case 1120:
case 2302:
case 1820:
case 2946:
case 4076:
case 124:
case 3506:
case 3964:
case 2911:
case 1499:
case 2250:
case 2193:
case 560:
case 494:
case 1438:
case 3042:
case 2908:
case 1239:
case 315:
case 3234:
case 359:
case 1959:
case 3548:
case 1318:
case 2779:
case 3926:
case 2567:
case 3833:
case 965:
case 3882:
case 3013:
case 1472:
case 1896:
case 253:
case 2294:
case 2471:
case 3585:
case 1196:
case 4084:
case 1255:
case 165:
case 3354:
case 3286:
case 1521:
case 2063:
case 2522:
case 1347:
case 2405:
case 2825:
case 2125:
case 4081:
case 2291:
case 2474:
case 1292:
case 2889:
case 3877:
case 3210:
case 3951:
case 2057:
case 4036:
case 274:
case 1066:
case 1487:
case 44:
case 448:
case 3231:
case 906:
case 1409:
case 2076:
case 1885:
case 3156:
case 2355:
case 1088:
case 2939:
case 3443:
case 744:
case 3475:
case 2259:
case 1582:
case 3124:
case 809:
case 2714:
case 3404:
case 2458:
case 3824:
case 1533:
case 2427:
case 2807:
case 2622:
case 2536:
case 155:
case 1848:
case 3999:
case 189:
case 2702:
case 119:
case 1148:
case 3268:
case 3332:
case 1073:
case 722:
case 872:
case 3900:
case 860:
case 1624:
case 2667:
case 2462:
case 919:
case 1360:
case 3629:
case 886:
case 816:
case 2235:
case 607:
case 3685:
case 32:
case 2746:
case 106:
case 3020:
case 3399:
case 3252:
case 4067:
case 2730:
case 798:
case 2653:
case 2711:
case 3300:
case 403:
case 653:
case 3764:
case 2584:
case 3648:
case 3295:
case 411:
case 592:
case 3754:
case 1842:
case 1573:
case 24:
case 4049:
case 3315:
case 1214:
case 3338:
case 105:
case 4028:
case 2201:
case 1666:
case 2649:
case 1202:
case 1082:
case 1113:
case 885:
case 3372:
case 815:
case 1451:
case 2180:
case 956:
case 1350:
case 2576:
case 2880:
case 4063:
case 2965:
case 1588:
case 1537:
case 453:
case 2084:
case 681:
case 1426:
case 1806:
case 532:
case 3258:
case 1106:
case 3938:
case 156:
case 528:
case 3915:
case 2379:
case 1230:
case 3387:
case 3972:
case 761:
case 2144:
case 1246:
case 3166:
case 2770:
case 2998:
case 3227:
case 2212:
case 905:
case 2103:
case 569:
case 2803:
case 1211:
case 2605:
case 2789:
case 1297:
case 429:
case 2725:
case 2436:
case 145:
case 691:
case 1906:
case 2341:
case 2095:
case 2558:
case 3575:
case 754:
case 1150:
case 2903:
case 1590:
case 2380:
case 1850:
case 46:
case 4005:
case 3172:
case 3543:
case 1313:
case 921:
case 2944:
case 1509:
case 2220:
case 3777:
case 1026:
case 2484:
case 4071:
case 643:
case 1942:
case 1054:
case 1306:
case 540:
case 631:
case 2941:
case 512:
case 3047:
case 773:
case 1672:
case 2303:
case 3782:
case 2562:
case 3650:
case 3660:
case 162:
case 896:
case 3043:
case 946:
case 1891:
case 1289:
case 1191:
case 170:
case 2634:
case 849:
case 2058:
case 3284:
case 999:
case 3178:
case 66:
case 1329:
case 3737:
case 3183:
case 1445:
case 1064:
case 1917:
case 1699:
case 1720:
case 139:
case 376:
case 1348:
case 718:
case 2307:
case 1473:
case 629:
case 78:
case 2686:
case 3:
case 2523:
case 836:
case 3240:
case 4010:
case 3924:
case 271:
case 1929:
case 382:
case 1293:
case 1860:
case 4031:
case 340:
case 1985:
case 3956:
case 2610:
case 1554:
case 962:
case 431:
case 1194:
case 3800:
case 3420:
case 146:
case 3100:
case 3321:
case 2907:
case 2631:
case 3559:
case 199:
case 3899:
case 3001:
case 3281:
case 4023:
case 1818:
case 3442:
case 1654:
case 952:
case 2510:
case 2989:
case 1038:
case 3659:
case 2531:
case 671:
case 247:
case 1706:
case 1626:
case 2393:
case 1578:
case 2703:
case 3050:
case 3413:
case 733:
case 3766:
case 1396:
case 2623:
case 3151:
case 3382:
case 3591:
case 3851:
case 596:
case 741:
case 3333:
case 1072:
case 1599:
case 527:
case 1859:
case 4052:
case 3267:
case 3826:
case 1147:
case 1847:
case 414:
case 2074:
case 3618:
case 1500:
case 2108:
case 26:
case 2808:
case 1996:
case 2457:
case 1651:
case 2780:
case 152:
case 3560:
case 793:
case 3933:
case 1087:
case 536:
case 725:
case 658:
case 65:
case 3377:
case 229:
case 2695:
case 3982:
case 3809:
case 190:
case 3091:
case 535:
case 2997:
case 3228:
case 2619:
case 243:
case 1843:
case 3485:
case 726:
case 1175:
case 3263:
case 3890:
case 3190:
case 231:
case 1424:
case 1104:
case 2031:
case 3164:
case 1717:
case 3601:
case 3249:
case 3864:
case 3721:
case 2111:
case 1812:
case 2811:
case 1203:
case 1083:
case 3937:
case 4062:
case 1515:
case 2830:
case 2010:
case 737:
case 902:
case 2453:
case 1869:
case 1244:
case 2114:
case 595:
case 3675:
case 764:
case 327:
case 3724:
case 1587:
case 608:
case 1690:
case 2814:
case 620:
case 130:
case 3161:
case 3861:
case 3988:
case 3756:
case 1785:
case 1241:
case 1609:
case 3060:
case 291:
case 3643:
case 4027:
case 3337:
case 1280:
case 3669:
case 882:
case 3973:
case 2102:
case 1801:
case 1421:
case 2627:
case 1748:
case 1101:
case 179:
case 1320:
case 2802:
case 3417:
case 8:
case 249:
case 2937:
case 1722:
case 2721:
case 2373:
case 2864:
case 745:
case 1127:
case 3031:
case 3453:
case 3010:
case 3830:
case 2257:
case 4:
case 3130:
case 3571:
case 2228:
case 343:
case 2091:
case 1092:
case 2429:
case 3662:
case 3206:
case 3086:
case 1858:
case 1598:
case 1376:
case 2550:
case 2890:
case 2263:
case 2094:
case 721:
case 871:
case 2669:
case 1646:
case 4004:
case 529:
case 1579:
case 2417:
case 1611:
case 954:
case 3658:
case 2861:
case 2604:
case 1862:
case 4069:
case 3814:
case 3114:
case 2724:
case 2675:
case 568:
case 2643:
case 56:
case 1119:
case 2988:
case 2756:
case 4012:
case 1895:
case 1555:
case 3870:
case 3586:
case 1749:
case 2766:
case 1221:
case 3703:
case 2050:
case 3071:
case 820:
case 770:
case 4059:
case 2591:
case 1152:
case 762:
case 1852:
case 2977:
case 1336:
case 188:
case 3989:
case 543:
case 3510:
case 1608:
case 1340:
case 2442:
case 6:
case 2647:
case 1763:
case 3393:
case 814:
case 884:
case 612:
case 3531:
case 531:
case 2659:
case 98:
case 2253:
case 91:
case 918:
case 3652:
case 1868:
case 3457:
case 1670:
case 1981:
case 1123:
case 3695:
case 676:
case 2933:
case 3449:
case 4035:
case 2267:
case 1224:
case 2406:
case 2826:
case 1940:
case 3325:
case 2126:
case 904:
case 3389:
case 295:
case 3428:
case 3808:
case 368:
case 3741:
case 3005:
case 2618:
case 3229:
case 3993:
case 3074:
case 2132:
case 831:
case 1131:
case 1353:
case 2883:
case 2518:
case 993:
case 2694:
case 1810:
case 843:
case 427:
case 276:
case 1046:
case 1277:
case 1110:
case 3192:
case 2324:
case 508:
case 2043:
case 2178:
case 3155:
case 2004:
case 1570:
case 2284:
case 3855:
case 3634:
case 1322:
case 941:
case 2800:
case 2547:
case 1508:
case 3610:
case 891:
case 2745:
case 2001:
case 2559:
case 3631:
case 1282:
case 1002:
case 933:
case 2240:
case 1967:
case 496:
case 635:
case 125:
case 3523:
case 3686:
case 3568:
case 2788:
case 193:
case 2691:
case 3139:
case 240:
case 1776:
case 371:
case 3903:
case 3481:
case 2575:
case 3898:
case 2504:
case 384:
case 3558:
case 3095:
case 3198:
case 2543:
case 558:
case 1171:
case 2872:
case 2496:
case 2172:
case 1871:
case 495:
case 2115:
case 2815:
case 2138:
case 1493:
case 30:
case 2838:
case 2569:
case 3440:
case 2512:
case 1679:
case 964:
case 1273:
case 702:
case 86:
case 3671:
case 1357:
case 696:
case 1514:
case 435:
case 2650:
case 730:
case 2187:
case 2782:
case 1698:
case 1245:
case 2501:
case 1736:
case 275:
case 779:
case 197:
case 2047:
case 1489:
case 2276:
case 1874:
case 1363:
case 571:
case 3941:
case 1105:
case 1288:
case 1470:
case 1603:
case 3495:
case 1723:
case 3649:
case 2096:
case 1768:
case 3657:
case 97:
case 4006:
case 2435:
case 853:
case 3628:
case 766:
case 34:
case 348:
case 1905:
case 2754:
case 3141:
case 2606:
case 1261:
case 2338:
case 2262:
case 3663:
case 3040:
case 1752:
case 250:
case 3269:
case 3144:
case 2751:
case 1857:
case 2972:
case 710:
case 2387:
case 1971:
case 459:
case 485:
case 1680:
case 742:
case 3103:
case 917:
case 2613:
case 3770:
case 3998:
case 394:
case 1849:
case 1795:
case 2166:
case 3204:
case 3084:
case 3275:
case 724:
case 2459:
case 1290:
case 1374:
case 1128:
case 563:
case 1025:
case 1408:
case 2915:
case 2642:
case 2447:
case 1089:
case 1641:
case 17:
case 2938:
case 2412:
case 1310:
case 3536:
case 2223:
case 3622:
case 3540:
case 1153:
case 1593:
case 2383:
case 2900:
case 2469:
case 811:
case 1331:
case 2332:
case 2268:
case 881:
case 1430:
case 3939:
case 548:
case 183:
case 2443:
case 2596:
case 3355:
case 2378:
case 3247:
case 1719:
case 2404:
case 1226:
case 1867:
case 1167:
case 486:
case 1934:
case 2761:
case 857:
case 983:
case 3730:
case 913:
case 1910:
case 2399:
case 1589:
case 3746:
case 2252:
case 2295:
case 1727:
case 2932:
case 1122:
case 2821:
case 2401:
case 1822:
case 232:
case 3667:
case 1758:
case 3339:
case 1414:
case 1334:
case 228:
case 3992:
case 3235:
case 3419:
case 615:
case 659:
case 3218:
case 409:
case 2351:
case 2182:
case 1299:
case 1181:
case 1923:
case 2450:
case 2787:
case 2833:
case 144:
case 998:
case 1080:
case 2529:
case 1200:
case 3765:
case 848:
case 1395:
case 353:
case 3294:
case 1968:
case 2954:
case 511:
case 1705:
case 503:
case 3553:
case 3260:
case 3193:
case 1507:
case 1840:
case 600:
case 62:
case 1016:
case 13:
case 138:
case 2548:
case 1836:
case 215:
case 1465:
case 1771:
case 3057:
case 2772:
case 922:
case 2177:
case 2210:
case 1044:
case 1995:
case 3798:
case 3970:
case 1232:
case 1368:
case 374:
case 867:
case 3049:
case 938:
case 894:
case 3308:
case 2354:
case 2286:
case 2517:
case 692:
case 3636:
case 1184:
case 2738:
case 3125:
case 2715:
case 706:
case 3825:
case 1693:
case 1287:
case 357:
case 3330:
case 400:
case 428:
case 42:
case 3431:
case 705:
case 3346:
case 209:
case 2145:
case 2845:
case 2364:
case 2873:
case 1327:
case 2542:
case 2620:
case 2173:
case 2700:
case 553:
case 2491:
case 1176:
case 2029:
case 2274:
case 1492:
case 1876:
case 303:
case 2961:
case 507:
case 1734:
case 3067:
case 3946:
case 3528:
case 863:
case 2494:
case 2271:
case 756:
case 3911:
case 574:
case 2837:
case 2732:
case 1731:
case 492:
case 2017:
case 3314:
case 3197:
case 3676:
case 161:
case 1215:
case 3557:
case 1439:
case 2361:
case 3792:
case 1238:
case 1544:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752818401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,];
var gg_b = "1752818401/";

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
