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
case 1051:
case 109:
case 1465:
case 218:
case 49:
case 1694:
case 3182:
case 1245:
case 2351:
case 3902:
case 239:
case 1289:
case 2269:
case 1152:
case 290:
case 1194:
case 1296:
case 1064:
case 2084:
case 1696:
case 2366:
case 3282:
case 1145:
case 144:
case 1909:
case 3159:
case 3407:
case 228:
case 578:
case 3356:
case 397:
case 977:
case 1252:
case 1066:
case 1294:
case 2169:
case 2972:
case 2099:
case 4028:
case 3888:
case 2697:
case 1367:
case 526:
case 3057:
case 2963:
case 962:
case 2426:
case 2375:
case 3762:
case 1603:
case 2180:
case 2526:
case 695:
case 1090:
case 2941:
case 1075:
case 1087:
case 3953:
case 3791:
case 375:
case 995:
case 2900:
case 2752:
case 2794:
case 2390:
case 2680:
case 662:
case 2524:
case 1325:
case 3995:
case 1835:
case 1540:
case 2745:
case 1260:
case 1440:
case 509:
case 3521:
case 3305:
case 1203:
case 3946:
case 2025:
case 2789:
case 2297:
case 566:
case 3304:
case 3700:
case 295:
case 1102:
case 2991:
case 2753:
case 3741:
case 1834:
case 676:
case 2744:
case 3122:
case 2301:
case 3952:
case 396:
case 976:
case 559:
case 1602:
case 3763:
case 3021:
case 1076:
case 2024:
case 1001:
case 2179:
case 1040:
case 549:
case 3609:
case 1836:
case 1487:
case 2746:
case 1475:
case 117:
case 3996:
case 572:
case 222:
case 1629:
case 1202:
case 3945:
case 3457:
case 1590:
case 167:
case 504:
case 1490:
case 4088:
case 1959:
case 1074:
case 3557:
case 780:
case 2837:
case 968:
case 1466:
case 1923:
case 3393:
case 939:
case 1747:
case 1144:
case 618:
case 1808:
case 517:
case 1246:
case 3903:
case 104:
case 1027:
case 3183:
case 1295:
case 668:
case 639:
case 1644:
case 3960:
case 2620:
case 1146:
case 2220:
case 628:
case 2365:
case 2973:
case 3481:
case 2584:
case 1464:
case 1170:
case 2085:
case 1065:
case 1646:
case 1195:
case 1451:
case 159:
case 928:
case 493:
case 2729:
case 750:
case 3857:
case 3088:
case 1536:
case 1436:
case 1887:
case 3368:
case 1875:
case 2310:
case 496:
case 3711:
case 1434:
case 16:
case 2825:
case 2335:
case 2617:
case 2019:
case 393:
case 3798:
case 1116:
case 2948:
case 189:
case 1864:
case 875:
case 1216:
case 52:
case 1114:
case 27:
case 231:
case 1717:
case 3528:
case 2899:
case 1614:
case 1866:
case 2886:
case 1630:
case 1008:
case 2037:
case 755:
case 3748:
case 896:
case 1615:
case 1827:
case 184:
case 67:
case 39:
case 97:
case 2419:
case 2885:
case 1034:
case 2715:
case 1840:
case 2730:
case 2334:
case 2824:
case 1876:
case 113:
case 475:
case 541:
case 2139:
case 1458:
case 1036:
case 551:
case 3488:
case 2826:
case 2911:
case 514:
case 1276:
case 1174:
case 1460:
case 2480:
case 1029:
case 2765:
case 1240:
case 1560:
case 2956:
case 652:
case 2329:
case 3523:
case 1749:
case 1403:
case 1674:
case 2626:
case 942:
case 2954:
case 2124:
case 330:
case 2992:
case 2226:
case 1140:
case 3742:
case 2727:
case 1274:
case 2943:
case 556:
case 3951:
case 3738:
case 1347:
case 1176:
case 3793:
case 1640:
case 3022:
case 1379:
case 1002:
case 2047:
case 1981:
case 3621:
case 583:
case 2649:
case 532:
case 1227:
case 2774:
case 3706:
case 3771:
case 3582:
case 2185:
case 1165:
case 1095:
case 1070:
case 2905:
case 891:
case 2685:
case 2395:
case 1594:
case 1724:
case 3990:
case 1320:
case 2701:
case 2344:
case 1265:
case 2740:
case 3107:
case 1545:
case 3559:
case 114:
case 3341:
case 3083:
case 1127:
case 2353:
case 3704:
case 2776:
case 1044:
case 507:
case 3607:
case 2020:
case 2469:
case 1589:
case 2569:
case 2249:
case 1053:
case 3363:
case 936:
case 1815:
case 1553:
case 547:
case 1089:
case 2069:
case 3705:
case 1444:
case 1096:
case 658:
case 1725:
case 557:
case 1453:
case 1166:
case 2906:
case 1369:
case 2699:
case 2686:
case 1045:
case 2286:
case 1266:
case 2184:
case 3181:
case 169:
case 2299:
case 1570:
case 2775:
case 1651:
case 3082:
case 2684:
case 3901:
case 2394:
case 2790:
case 3976:
case 3391:
case 2904:
case 335:
case 58:
case 1816:
case 3681:
case 106:
case 2267:
case 2547:
case 1502:
case 1799:
case 1786:
case 3522:
case 2125:
case 2955:
case 242:
case 18:
case 3318:
case 2817:
case 2579:
case 3756:
case 937:
case 2225:
case 1784:
case 2764:
case 1690:
case 157:
case 2097:
case 3761:
case 3023:
case 1187:
case 2167:
case 3509:
case 2080:
case 3754:
case 3350:
case 2993:
case 2938:
case 279:
case 3743:
case 3409:
case 3157:
case 3927:
case 1416:
case 3935:
case 4082:
case 55:
case 2736:
case 1846:
case 3228:
case 3628:
case 1988:
case 1514:
case 4059:
case 2637:
case 899:
case 830:
case 1030:
case 1608:
case 3128:
case 1015:
case 3958:
case 1853:
case 587:
case 688:
case 1108:
case 2330:
case 1844:
case 63:
case 710:
case 1829:
case 671:
case 1339:
case 971:
case 1136:
case 2912:
case 93:
case 2417:
case 15:
case 720:
case 2879:
case 233:
case 1737:
case 1802:
case 1236:
case 3332:
case 2708:
case 521:
case 1635:
case 4022:
case 271:
case 2913:
case 1258:
case 23:
case 1110:
case 1:
case 430:
case 1610:
case 586:
case 153:
case 2539:
case 982:
case 3823:
case 3688:
case 1210:
case 2897:
case 1158:
case 3398:
case 3908:
case 1803:
case 835:
case 1719:
case 1235:
case 1860:
case 2880:
case 765:
case 111:
case 1515:
case 2710:
case 2314:
case 1845:
case 161:
case 2219:
case 1430:
case 1014:
case 3859:
case 2316:
case 2931:
case 5:
case 121:
case 3934:
case 1894:
case 1852:
case 186:
case 894:
case 2119:
case 543:
case 725:
case 2543:
case 2263:
case 3349:
case 596:
case 823:
case 2454:
case 2492:
case 3670:
case 359:
case 489:
case 3195:
case 3646:
case 3253:
case 2200:
case 3170:
case 1772:
case 1581:
case 2561:
case 2241:
case 3244:
case 3695:
case 2878:
case 2055:
case 3146:
case 2556:
case 2042:
case 1007:
case 2980:
case 1960:
case 615:
case 3779:
case 813:
case 2093:
case 2641:
case 2163:
case 2456:
case 965:
case 1183:
case 3246:
case 2722:
case 401:
case 3808:
case 3144:
case 2307:
case 1342:
case 2997:
case 3270:
case 863:
case 1828:
case 372:
case 992:
case 2100:
case 3747:
case 1338:
case 1393:
case 3923:
case 3153:
case 3074:
case 1557:
case 2006:
case 3959:
case 3129:
case 3490:
case 733:
case 1109:
case 1945:
case 3587:
case 3629:
case 3202:
case 2969:
case 4058:
case 3475:
case 1996:
case 1371:
case 3326:
case 1609:
case 3040:
case 1209:
case 884:
case 1021:
case 41:
case 2783:
case 1763:
case 3229:
case 298:
case 196:
case 3720:
case 3324:
case 210:
case 1122:
case 851:
case 2272:
case 2321:
case 1970:
case 3810:
case 1223:
case 2005:
case 463:
case 2250:
case 920:
case 4034:
case 2504:
case 3576:
case 1521:
case 413:
case 2618:
case 3540:
case 3835:
case 3325:
case 2273:
case 3660:
case 3103:
case 175:
case 3087:
case 2357:
case 3075:
case 3090:
case 2406:
case 2650:
case 3474:
case 1762:
case 3603:
case 378:
case 1623:
case 3983:
case 3574:
case 1057:
case 423:
case 2506:
case 771:
case 610:
case 2868:
case 441:
case 575:
case 2812:
case 1659:
case 225:
case 3189:
case 788:
case 1356:
case 3196:
case 1773:
case 4008:
case 81:
case 2538:
case 2442:
case 354:
case 326:
case 3689:
case 3527:
case 3427:
case 2262:
case 2056:
case 3145:
case 2542:
case 3386:
case 2493:
case 2438:
case 3696:
case 3296:
case 3064:
case 2555:
case 1750:
case 1354:
case 2662:
case 366:
case 2191:
case 2947:
case 1902:
case 2061:
case 2162:
case 1182:
case 3245:
case 3694:
case 265:
case 2381:
case 316:
case 3465:
case 3051:
case 309:
case 2871:
case 4090:
case 2248:
case 2568:
case 2806:
case 859:
case 3874:
case 3458:
case 3558:
case 4087:
case 1331:
case 313:
case 804:
case 2804:
case 2148:
case 1916:
case 2132:
case 3535:
case 3840:
case 363:
case 737:
case 2031:
case 872:
case 3410:
case 2632:
case 3230:
case 1378:
case 409:
case 2078:
case 817:
case 4064:
case 3739:
case 466:
case 426:
case 384:
case 1748:
case 2838:
case 2842:
case 3130:
case 748:
case 3115:
case 2512:
case 481:
case 3630:
case 758:
case 4066:
case 3508:
case 3866:
case 708:
case 3614:
case 472:
case 2939:
case 3717:
case 736:
case 2111:
case 4027:
case 404:
case 1312:
case 3216:
case 2861:
case 2413:
case 2478:
case 3319:
case 2578:
case 3864:
case 3851:
case 2843:
case 2211:
case 2892:
case 449:
case 779:
case 881:
case 2805:
case 844:
case 2233:
case 31:
case 593:
case 4076:
case 3875:
case 2633:
case 2388:
case 2698:
case 3436:
case 3536:
case 417:
case 816:
case 2068:
case 1088:
case 809:
case 1857:
case 752:
case 194:
case 2898:
case 3687:
case 3529:
case 600:
case 2323:
case 886:
case 1792:
case 1350:
case 3429:
case 1509:
case 3187:
case 1023:
case 1657:
case 1761:
case 2572:
case 2472:
case 821:
case 900:
case 1373:
case 861:
case 2985:
case 2977:
case 1318:
case 45:
case 2605:
case 403:
case 535:
case 250:
case 1522:
case 3275:
case 240:
case 3502:
case 306:
case 2757:
case 1681:
case 3816:
case 1391:
case 1976:
case 3921:
case 135:
case 319:
case 1901:
case 3595:
case 2154:
case 3664:
case 2062:
case 3446:
case 205:
case 3767:
case 3570:
case 3651:
case 1181:
case 2161:
case 338:
case 1362:
case 3164:
case 3470:
case 3266:
case 3094:
case 77:
case 2463:
case 3045:
case 4030:
case 3666:
case 2811:
case 2292:
case 2254:
case 3251:
case 80:
case 645:
case 3814:
case 1059:
case 1583:
case 3453:
case 3166:
case 3725:
case 2656:
case 3264:
case 2261:
case 2359:
case 2500:
case 1705:
case 2638:
case 2967:
case 3053:
case 3627:
case 905:
case 3489:
case 2255:
case 411:
case 1704:
case 2721:
case 314:
case 1341:
case 1083:
case 3127:
case 4014:
case 1559:
case 1459:
case 3545:
case 461:
case 245:
case 2925:
case 3552:
case 3665:
case 3494:
case 3452:
case 255:
case 3070:
case 3165:
case 530:
case 346:
case 2242:
case 1207:
case 2655:
case 599:
case 356:
case 3227:
case 2604:
case 3981:
case 4:
case 200:
case 2518:
case 1964:
case 3601:
case 1793:
case 2848:
case 332:
case 3347:
case 1121:
case 1951:
case 1738:
case 383:
case 40:
case 1742:
case 443:
case 2271:
case 2832:
case 130:
case 2322:
case 3503:
case 1423:
case 940:
case 2606:
case 3749:
case 3403:
case 640:
case 3201:
case 2171:
case 1009:
case 3029:
case 3174:
case 2106:
case 1372:
case 3276:
case 2862:
case 4095:
case 386:
case 456:
case 424:
case 4046:
case 3894:
case 3852:
case 857:
case 321:
case 4070:
case 847:
case 2891:
case 3430:
case 1859:
case 790:
case 88:
case 3845:
case 739:
case 2011:
case 464:
case 3889:
case 3515:
case 1311:
case 311:
case 3415:
case 4044:
case 718:
case 3235:
case 2168:
case 819:
case 2850:
case 3803:
case 407:
case 1398:
case 3158:
case 1688:
case 3210:
case 1333:
case 869:
case 1288:
case 2448:
case 2532:
case 3:
case 4002:
case 1712:
case 3258:
case 2873:
case 3635:
case 776:
case 1332:
case 280:
case 1348:
case 3737:
case 3634:
case 34:
case 2032:
case 722:
case 303:
case 2631:
case 814:
case 447:
case 2231:
case 3136:
case 762:
case 3234:
case 1713:
case 824:
case 3339:
case 2598:
case 795:
case 712:
case 1809:
case 2498:
case 846:
case 3108:
case 2213:
case 2278:
case 591:
case 985:
case 4089:
case 1731:
case 3015:
case 1958:
case 1128:
case 2841:
case 3608:
case 685:
case 3414:
case 2511:
case 1883:
case 3514:
case 429:
case 1628:
case 1228:
case 3870:
case 4094:
case 2178:
case 2113:
case 3516:
case 406:
case 2678:
case 3416:
case 2613:
case 1263:
case 3729:
case 2283:
case 1543:
case 598:
case 560:
case 1554:
case 2355:
case 1592:
case 1443:
case 3049:
case 1241:
case 2581:
case 3484:
case 377:
case 997:
case 1813:
case 510:
case 3365:
case 1055:
case 431:
case 2960:
case 2007:
case 3620:
case 1042:
case 1556:
case 1038:
case 1163:
case 1456:
case 1600:
case 2183:
case 47:
case 270:
case 3950:
case 2342:
case 1307:
case 520:
case 3499:
case 2828:
case 3599:
case 1141:
case 3327:
case 334:
case 3837:
case 2338:
case 1663:
case 2683:
case 1100:
case 1006:
case 2557:
case 1672:
case 3279:
case 3795:
case 2457:
case 3026:
case 2989:
case 1969:
case 74:
case 3247:
case 3567:
case 322:
case 1172:
case 2306:
case 3374:
case 3770:
case 2996:
case 703:
case 2609:
case 120:
case 3746:
case 2622:
case 3024:
case 3179:
case 1783:
case 362:
case 3647:
case 2952:
case 3525:
case 2122:
case 110:
case 2994:
case 2741:
case 1831:
case 1505:
case 3991:
case 3425:
case 975:
case 2304:
case 3753:
case 515:
case 3297:
case 3789:
case 2223:
case 1118:
case 3796:
case 1173:
case 3424:
case 565:
case 1759:
case 3745:
case 831:
case 2995:
case 1404:
case 3524:
case 2944:
case 1273:
case 1920:
case 3390:
case 1150:
case 70:
case 1218:
case 3067:
case 3900:
case 1357:
case 1782:
case 2762:
case 1571:
case 3375:
case 1471:
case 3963:
case 996:
case 1868:
case 3387:
case 3972:
case 3099:
case 4037:
case 1291:
case 2718:
case 2356:
case 1593:
case 473:
case 3669:
case 2407:
case 1542:
case 1262:
case 2282:
case 1438:
case 1662:
case 3703:
case 2750:
case 2354:
case 1555:
case 192:
case 115:
case 1191:
case 3351:
case 1723:
case 1061:
case 3577:
case 1054:
case 3364:
case 1162:
case 3585:
case 2182:
case 3485:
case 318:
case 1381:
case 1691:
case 711:
case 670:
case 3477:
case 1232:
case 1871:
case 3911:
case 2488:
case 1568:
case 1248:
case 1806:
case 877:
case 3139:
case 2916:
case 1148:
case 1804:
case 707:
case 2821:
case 3824:
case 3334:
case 3730:
case 1132:
case 834:
case 3239:
case 1648:
case 3715:
case 1031:
case 764:
case 2313:
case 3519:
case 29:
case 1855:
case 490:
case 714:
case 1078:
case 1013:
case 4084:
case 468:
case 3849:
case 439:
case 428:
case 3998:
case 862:
case 2748:
case 3308:
case 2807:
case 1842:
case 1512:
case 693:
case 4086:
case 719:
case 69:
case 706:
case 1611:
case 3437:
case 2528:
case 769:
case 1111:
case 2312:
case 1413:
case 2881:
case 1478:
case 4049:
case 1578:
case 3884:
case 477:
case 3948:
case 1843:
case 293:
case 2733:
case 1211:
case 1892:
case 3019:
case 4077:
case 1854:
case 3617:
case 1431:
case 3335:
case 495:
case 1805:
case 747:
case 2711:
case 1298:
case 462:
case 1233:
case 3310:
case 868:
case 2915:
case 839:
case 2368:
case 1633:
case 1068:
case 3716:
case 818:
case 1133:
case 1198:
case 2409:
case 294:
case 2927:
case 888:
case 1323:
case 3993:
case 379:
case 3938:
case 3751:
case 2350:
case 2754:
case 2792:
case 3942:
case 76:
case 2509:
case 2657:
case 1205:
case 3167:
case 1572:
case 1781:
case 3764:
case 3225:
case 71:
case 699:
case 1985:
case 2965:
case 2373:
case 2257:
case 1605:
case 72:
case 3955:
case 3125:
case 3447:
case 1073:
case 433:
case 3547:
case 1105:
case 3267:
case 2422:
case 482:
case 1143:
case 3904:
case 2976:
case 2681:
case 701:
case 3790:
case 3394:
case 3352:
case 2901:
case 1256:
case 2940:
case 1643:
case 540:
case 3775:
case 1692:
case 1654:
case 3184:
case 1382:
case 2362:
case 1811:
case 3686:
case 1926:
case 3971:
case 3396:
case 1156:
case 1463:
case 1243:
case 1656:
case 871:
case 3345:
case 3284:
case 789:
case 1261:
case 83:
case 3069:
case 1500:
case 1041:
case 2363:
case 1638:
case 833:
case 3469:
case 2607:
case 1642:
case 3020:
case 1193:
case 1138:
case 1721:
case 935:
case 2704:
case 2083:
case 2341:
case 1142:
case 3740:
case 3344:
case 2459:
case 2990:
case 3685:
case 784:
case 1491:
case 145:
case 3395:
case 155:
case 3905:
case 3177:
case 1655:
case 348:
case 3185:
case 2482:
case 358:
case 3370:
case 751:
case 1238:
case 1293:
case 3961:
case 555:
case 3047:
case 1418:
case 723:
case 100:
case 3624:
case 471:
case 1573:
case 2738:
case 1104:
case 2793:
case 1848:
case 374:
case 994:
case 3943:
case 1206:
case 3226:
case 1832:
case 1707:
case 3079:
case 4017:
case 3124:
case 3954:
case 1309:
case 2755:
case 1671:
case 1986:
case 2966:
case 3839:
case 1606:
case 3329:
case 1072:
case 3597:
case 3580:
case 2009:
case 763:
case 3956:
case 1171:
case 3126:
case 337:
case 3480:
case 1862:
case 1788:
case 2768:
case 781:
case 879:
case 458:
case 754:
case 3619:
case 3758:
case 3931:
case 3316:
case 185:
case 2859:
case 1612:
case 3219:
case 766:
case 1011:
case 3869:
case 3314:
case 1112:
case 709:
case 842:
case 4020:
case 716:
case 2936:
case 437:
case 3880:
case 1033:
case 2908:
case 2688:
case 3539:
case 1937:
case 1432:
case 691:
case 1268:
case 1448:
case 4079:
case 1532:
case 402:
case 4047:
case 33:
case 2712:
case 1873:
case 371:
case 991:
case 3978:
case 3708:
case 2332:
case 180:
case 452:
case 1728:
case 1131:
case 767:
case 3879:
case 1032:
case 3417:
case 1048:
case 1231:
case 1872:
case 3039:
case 2778:
case 291:
case 1598:
case 2809:
case 1498:
case 1433:
case 3734:
case 3330:
case 3820:
case 3137:
case 802:
case 2731:
case 2128:
case 3637:
case 2628:
case 3968:
case 2228:
case 3237:
case 1178:
case 3736:
case 580:
case 1113:
case 408:
case 772:
case 2935:
case 837:
case 2051:
case 118:
case 1485:
case 3043:
case 2384:
case 2245:
case 1364:
case 2780:
case 1585:
case 2565:
case 2652:
case 2694:
case 1819:
case 1577:
case 3054:
case 2797:
case 2289:
case 3723:
case 266:
case 1269:
case 315:
case 139:
case 392:
case 972:
case 3555:
case 3662:
case 1703:
case 4013:
case 1084:
case 2296:
case 949:
case 3438:
case 3542:
case 244:
case 3056:
case 3262:
case 2427:
case 2527:
case 128:
case 2689:
case 1669:
case 254:
case 3442:
case 2399:
case 3538:
case 659:
case 2294:
case 1086:
case 2252:
case 3291:
case 649:
case 1169:
case 3812:
case 1387:
case 3868:
case 1375:
case 2983:
case 1526:
case 3571:
case 1180:
case 2603:
case 2160:
case 2090:
case 2075:
case 1197:
case 2087:
case 3218:
case 2103:
case 2660:
case 2501:
case 2476:
case 1524:
case 967:
case 3673:
case 1280:
case 1745:
case 2260:
case 2540:
case 2835:
case 1424:
case 3504:
case 917:
case 1796:
case 1025:
case 2203:
case 3005:
case 568:
case 4031:
case 2810:
case 1753:
case 2102:
case 1991:
case 112:
case 195:
case 3831:
case 1744:
case 1340:
case 1679:
case 1301:
case 1525:
case 2324:
case 2229:
case 3783:
case 1647:
case 2602:
case 398:
case 3004:
case 791:
case 1179:
case 1467:
case 2836:
case 320:
case 2326:
case 2475:
case 2575:
case 1374:
case 2202:
case 1567:
case 267:
case 1795:
case 3672:
case 2490:
case 2074:
case 2129:
case 2959:
case 1702:
case 2747:
case 3100:
case 3663:
case 1837:
case 2923:
case 1486:
case 3141:
case 1599:
case 2144:
case 2246:
case 1120:
case 1950:
case 2653:
case 2027:
case 3600:
case 3038:
case 909:
case 3641:
case 1620:
case 3042:
case 3556:
case 3980:
case 3878:
case 1220:
case 2146:
case 1918:
case 3055:
case 981:
case 3461:
case 1584:
case 1365:
case 2244:
case 2385:
case 626:
case 2695:
case 3813:
case 177:
case 654:
case 644:
case 3241:
case 1484:
case 512:
case 2646:
case 3709:
case 3443:
case 1085:
case 3554:
case 1077:
case 2195:
case 249:
case 2349:
case 562:
case 3492:
case 3454:
case 2551:
case 3263:
case 681:
case 954:
case 926:
case 22:
case 3133:
case 4006:
case 57:
case 1716:
case 865:
case 3068:
case 613:
case 420:
case 2536:
case 3388:
case 1867:
case 2436:
case 2887:
case 3698:
case 4004:
case 1310:
case 498:
case 1714:
case 3233:
case 21:
case 460:
case 1117:
case 3531:
case 825:
case 26:
case 3805:
case 1825:
case 2534:
case 1617:
case 623:
case 3892:
case 3854:
case 1019:
case 2214:
case 651:
case 3843:
case 1948:
case 2116:
case 951:
case 2864:
case 3478:
case 941:
case 3413:
case 2216:
case 4093:
case 2114:
case 4042:
case 2717:
case 1899:
case 3012:
case 3611:
case 1886:
case 735:
case 201:
case 2630:
case 689:
case 3412:
case 251:
case 2008:
case 810:
case 3512:
case 1037:
case 4056:
case 3842:
case 2130:
case 860:
case 2615:
case 3893:
case 3838:
case 173:
case 3328:
case 1998:
case 2739:
case 492:
case 415:
case 2215:
case 4061:
case 820:
case 901:
case 3013:
case 3078:
case 601:
case 4043:
case 1419:
case 4092:
case 1877:
case 4054:
case 3917:
case 2230:
case 2865:
case 2034:
case 62:
case 2410:
case 3648:
case 3031:
case 263:
case 1239:
case 4005:
case 1730:
case 1334:
case 2535:
case 2801:
case 3804:
case 2876:
case 213:
case 92:
case 730:
case 799:
case 2458:
case 223:
case 3806:
case 573:
case 3568:
case 3468:
case 3232:
case 3871:
case 3204:
case 2029:
case 2460:
case 4033:
case 1126:
case 1956:
case 137:
case 1580:
case 2240:
case 2777:
case 1224:
case 1329:
case 1839:
case 2674:
case 3606:
case 2749:
case 3986:
case 2503:
case 3550:
case 1626:
case 1497:
case 1992:
case 1954:
case 1079:
case 3707:
case 647:
case 1226:
case 3271:
case 3206:
case 2274:
case 657:
case 1302:
case 558:
case 232:
case 1624:
case 2601:
case 2379:
case 2640:
case 300:
case 2002:
case 3418:
case 102:
case 3604:
case 3293:
case 3238:
case 929:
case 1370:
case 2227:
case 158:
case 256:
case 3242:
case 2165:
case 3655:
case 2726:
case 1177:
case 2070:
case 355:
case 485:
case 2452:
case 2046:
case 2552:
case 3155:
case 1685:
case 2665:
case 629:
case 1277:
case 537:
case 1701:
case 2724:
case 4011:
case 2545:
case 3142:
case 1344:
case 1285:
case 2265:
case 1740:
case 3063:
case 2957:
case 214:
case 2445:
case 906:
case 1776:
case 3721:
case 3193:
case 2596:
case 880:
case 606:
case 1469:
case 2489:
case 1020:
case 3255:
case 264:
case 2627:
case 2589:
case 2815:
case 1420:
case 1069:
case 2444:
case 3541:
case 3261:
case 656:
case 624:
case 2264:
case 3441:
case 2544:
case 793:
case 2453:
case 2725:
case 3400:
case 1520:
case 2814:
case 956:
case 3563:
case 3243:
case 1906:
case 229:
case 1699:
case 2369:
case 2045:
case 3463:
case 1686:
case 2546:
case 1286:
case 2052:
case 2266:
case 542:
case 3692:
case 614:
case 3654:
case 1775:
case 2651:
case 269:
case 2570:
case 3161:
case 305:
case 2446:
case 3091:
case 1787:
case 1394:
case 3924:
case 2664:
case 1684:
case 1904:
case 2495:
case 2921:
case 108:
case 3143:
case 914:
case 3757:
case 3949:
case 1547:
case 340:
case 536:
case 1267:
case 2799:
case 907:
case 1125:
case 3018:
case 1955:
case 142:
case 350:
case 2402:
case 1447:
case 607:
case 3605:
case 28:
case 508:
case 4048:
case 1479:
case 1817:
case 2290:
case 3977:
case 3050:
case 632:
case 3472:
case 2690:
case 2784:
case 2380:
case 3781:
case 3572:
case 885:
case 3205:
case 1080:
case 1942:
case 1303:
case 932:
case 1751:
case 2675:
case 3323:
case 1993:
case 3833:
case 2397:
case 2529:
case 2687:
case 983:
case 2416:
case 4062:
case 611:
case 2516:
case 1736:
case 533:
case 405:
case 582:
case 2870:
case 2514:
case 2414:
case 3841:
case 1820:
case 921:
case 1330:
case 1734:
case 2108:
case 686:
case 3433:
case 2829:
case 2339:
case 287:
case 2234:
case 1912:
case 643:
case 3631:
case 1417:
case 3048:
case 203:
case 25:
case 24:
case 3032:
case 1879:
case 2634:
case 133:
case 3131:
case 182:
case 440:
case 1847:
case 2737:
case 380:
case 2236:
case 2134:
case 4073:
case 1708:
case 400:
case 3818:
case 1978:
case 2635:
case 1913:
case 987:
case 3873:
case 171:
case 2110:
case 13:
case 2:
case 243:
case 3532:
case 1017:
case 588:
case 3548:
case 20:
case 2158:
case 4072:
case 3668:
case 65:
case 2803:
case 3033:
case 95:
case 3098:
case 903:
case 2860:
case 2415:
case 850:
case 840:
case 1314:
case 1869:
case 3011:
case 261:
case 2014:
case 4063:
case 3891:
case 385:
case 1316:
case 3212:
case 221:
case 1619:
case 445:
case 2852:
case 571:
case 2894:
case 286:
case 188:
case 2016:
case 797:
case 1119:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760450401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,];
var gg_b = "1760450401/";

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
