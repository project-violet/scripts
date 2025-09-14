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
case 3984:
case 3823:
case 3296:
case 2682:
case 1045:
case 1218:
case 2607:
case 1156:
case 1244:
case 3674:
case 3230:
case 3570:
case 1583:
case 2257:
case 1748:
case 3338:
case 3471:
case 170:
case 3549:
case 1639:
case 2760:
case 712:
case 3539:
case 330:
case 158:
case 2621:
case 2001:
case 1738:
case 3710:
case 2455:
case 1703:
case 2387:
case 1670:
case 3240:
case 2175:
case 1499:
case 2424:
case 2822:
case 1980:
case 3611:
case 3698:
case 3877:
case 2487:
case 1616:
case 2720:
case 281:
case 1399:
case 3448:
case 3414:
case 1108:
case 3776:
case 1771:
case 2464:
case 114:
case 1906:
case 113:
case 3371:
case 3863:
case 1376:
case 3438:
case 1410:
case 2084:
case 3799:
case 3072:
case 2859:
case 1143:
case 34:
case 1556:
case 3170:
case 2091:
case 2245:
case 1227:
case 2044:
case 2018:
case 605:
case 1869:
case 2392:
case 1409:
case 3765:
case 807:
case 2928:
case 1793:
case 2126:
case 2715:
case 3450:
case 3488:
case 2878:
case 1201:
case 752:
case 3139:
case 118:
case 912:
case 2034:
case 4090:
case 2447:
case 2235:
case 422:
case 2632:
case 1325:
case 756:
case 2347:
case 3643:
case 1273:
case 1533:
case 3493:
case 3709:
case 2831:
case 1354:
case 1979:
case 405:
case 1508:
case 1788:
case 2894:
case 3608:
case 3754:
case 2841:
case 4019:
case 1267:
case 3589:
case 1111:
case 3991:
case 1198:
case 626:
case 1930:
case 1284:
case 2337:
case 3633:
case 3116:
case 349:
case 2642:
case 2968:
case 888:
case 2050:
case 284:
case 2992:
case 1531:
case 3641:
case 1271:
case 3590:
case 1162:
case 399:
case 3842:
case 1496:
case 2833:
case 3418:
case 2505:
case 1104:
case 1430:
case 3037:
case 3047:
case 3100:
case 2785:
case 1440:
case 1159:
case 3832:
case 532:
case 2195:
case 1594:
case 3631:
case 800:
case 1479:
case 2088:
case 1636:
case 580:
case 283:
case 3993:
case 1113:
case 3186:
case 1015:
case 1214:
case 1248:
case 3988:
case 542:
case 2093:
case 120:
case 1954:
case 165:
case 2947:
case 3796:
case 866:
case 4089:
case 2569:
case 1718:
case 536:
case 3334:
case 1330:
case 209:
case 1734:
case 3740:
case 3318:
case 3344:
case 3391:
case 1396:
case 1619:
case 2937:
case 355:
case 2260:
case 3092:
case 1578:
case 2552:
case 3210:
case 985:
case 1909:
case 3190:
case 2663:
case 337:
case 1131:
case 3367:
case 3136:
case 1250:
case 2:
case 2317:
case 3613:
case 472:
case 3427:
case 809:
case 1358:
case 4039:
case 2372:
case 2105:
case 1504:
case 3659:
case 589:
case 361:
case 2987:
case 676:
case 1559:
case 3861:
case 3373:
case 266:
case 1784:
case 1866:
case 2677:
case 2811:
case 1513:
case 3254:
case 2612:
case 390:
case 1141:
case 3914:
case 4070:
case 1194:
case 3662:
case 1581:
case 4016:
case 3301:
case 3265:
case 3064:
case 883:
case 2215:
case 672:
case 3586:
case 2014:
case 3153:
case 3622:
case 3087:
case 3807:
case 2874:
case 58:
case 129:
case 785:
case 2623:
case 3327:
case 3484:
case 80:
case 2735:
case 2038:
case 884:
case 2417:
case 504:
case 1976:
case 3681:
case 347:
case 1391:
case 2669:
case 576:
case 2485:
case 3122:
case 1740:
case 155:
case 3396:
case 212:
case 1092:
case 1950:
case 3909:
case 2357:
case 48:
case 3653:
case 3238:
case 1210:
case 1678:
case 2652:
case 1897:
case 1186:
case 3015:
case 1553:
case 3954:
case 3379:
case 3181:
case 4043:
case 3925:
case 1796:
case 3744:
case 2851:
case 2287:
case 1730:
case 2123:
case 403:
case 2202:
case 1100:
case 2605:
case 1047:
case 1832:
case 1631:
case 707:
case 3690:
case 4056:
case 2915:
case 2054:
case 604:
case 1993:
case 3113:
case 3636:
case 1546:
case 2889:
case 1276:
case 1536:
case 2457:
case 2629:
case 1590:
case 3162:
case 1694:
case 572:
case 3271:
case 1641:
case 852:
case 3496:
case 1037:
case 1418:
case 781:
case 2177:
case 3430:
case 1882:
case 1807:
case 115:
case 2345:
case 3522:
case 3458:
case 3178:
case 3686:
case 2839:
case 2010:
case 1681:
case 1467:
case 3976:
case 3701:
case 147:
case 2292:
case 3293:
case 1265:
case 442:
case 3727:
case 1473:
case 3480:
case 2870:
case 480:
case 907:
case 2772:
case 432:
case 2099:
case 3380:
case 2247:
case 1604:
case 1254:
case 3288:
case 1055:
case 2717:
case 3513:
case 1948:
case 4083:
case 2563:
case 3131:
case 137:
case 1367:
case 1190:
case 4074:
case 2695:
case 3910:
case 1613:
case 1136:
case 3250:
case 3020:
case 256:
case 1384:
case 2237:
case 3504:
case 1780:
case 2445:
case 1427:
case 636:
case 1903:
case 1659:
case 2460:
case 692:
case 3895:
case 1438:
case 3410:
case 2228:
case 601:
case 2058:
case 1403:
case 2561:
case 3143:
case 1516:
case 1799:
case 3511:
case 2935:
case 1698:
case 1611:
case 885:
case 3616:
case 70:
case 3133:
case 496:
case 3108:
case 522:
case 140:
case 3771:
case 687:
case 4004:
case 1348:
case 1710:
case 2626:
case 1314:
case 2582:
case 3234:
case 3703:
case 988:
case 3574:
case 526:
case 4062:
case 1240:
case 3670:
case 2268:
case 1984:
case 3244:
case 3156:
case 1303:
case 696:
case 2420:
case 2702:
case 3291:
case 3045:
case 3748:
case 3714:
case 4059:
case 197:
case 2886:
case 1471:
case 370:
case 2764:
case 2360:
case 2197:
case 1350:
case 1754:
case 3829:
case 3267:
case 327:
case 1589:
case 353:
case 1918:
case 3930:
case 1991:
case 149:
case 1116:
case 2532:
case 1258:
case 766:
case 3996:
case 3085:
case 983:
case 3543:
case 37:
case 3533:
case 3325:
case 1934:
case 3805:
case 2836:
case 163:
case 1493:
case 2890:
case 2415:
case 1388:
case 3979:
case 7:
case 3354:
case 788:
case 1488:
case 1206:
case 909:
case 3852:
case 3651:
case 3174:
case 1656:
case 4031:
case 2182:
case 379:
case 3227:
case 3556:
case 2675:
case 1170:
case 1551:
case 2985:
case 2121:
case 1765:
case 1149:
case 2853:
case 700:
case 1450:
case 3751:
case 1069:
case 3941:
case 1148:
case 1114:
case 2515:
case 1593:
case 3565:
case 344:
case 1857:
case 343:
case 772:
case 2397:
case 1138:
case 1990:
case 3110:
case 1052:
case 3931:
case 892:
case 2775:
case 1222:
case 159:
case 581:
case 2834:
case 1451:
case 3456:
case 2120:
case 2332:
case 776:
case 3688:
case 3176:
case 1654:
case 1550:
case 1171:
case 333:
case 485:
case 174:
case 2497:
case 4040:
case 2041:
case 2295:
case 1029:
case 2094:
case 173:
case 3650:
case 3308:
case 1588:
case 3199:
case 2342:
case 1919:
case 3200:
case 36:
case 3333:
case 2637:
case 1885:
case 1259:
case 3603:
case 3374:
case 2307:
case 3770:
case 2382:
case 2827:
case 1900:
case 1845:
case 3165:
case 150:
case 4058:
case 3749:
case 1193:
case 2081:
case 3913:
case 1548:
case 2115:
case 2726:
case 3253:
case 2801:
case 1278:
case 2252:
case 1538:
case 3614:
case 4080:
case 2560:
case 302:
case 2912:
case 3739:
case 3904:
case 3498:
case 1835:
case 2977:
case 3411:
case 972:
case 1416:
case 119:
case 2022:
case 1503:
case 2687:
case 2520:
case 2004:
case 1316:
case 2361:
case 2205:
case 1470:
case 3483:
case 3398:
case 3922:
case 201:
case 4006:
case 3311:
case 3290:
case 2421:
case 1231:
case 2062:
case 3236:
case 1150:
case 2655:
case 3246:
case 1676:
case 3981:
case 3154:
case 287:
case 3671:
case 1241:
case 1986:
case 348:
case 3063:
case 2229:
case 3817:
case 1294:
case 3872:
case 1711:
case 2059:
case 2884:
case 1798:
case 3716:
case 2482:
case 2871:
case 3667:
case 3481:
case 367:
case 1762:
case 2982:
case 171:
case 2907:
case 3359:
case 4010:
case 3580:
case 1300:
case 1704:
case 452:
case 3558:
case 3061:
case 1584:
case 2185:
case 236:
case 1680:
case 3673:
case 2011:
case 1759:
case 331:
case 2098:
case 1066:
case 242:
case 2795:
case 3289:
case 123:
case 157:
case 1713:
case 583:
case 1026:
case 1606:
case 2157:
case 652:
case 2848:
case 3887:
case 2961:
case 341:
case 3196:
case 3911:
case 1527:
case 2083:
case 1191:
case 1144:
case 1256:
case 1118:
case 3998:
case 3404:
case 2545:
case 1134:
case 3082:
case 2275:
case 2535:
case 3140:
case 3007:
case 2074:
case 3627:
case 4076:
case 705:
case 456:
case 804:
case 2463:
case 1501:
case 3381:
case 2838:
case 3413:
case 1860:
case 1386:
case 2628:
case 926:
case 412:
case 2033:
case 3042:
case 3180:
case 3837:
case 1419:
case 3956:
case 145:
case 2266:
case 616:
case 1298:
case 2585:
case 4065:
case 3158:
case 2043:
case 3746:
case 1336:
case 1741:
case 832:
case 1390:
case 3431:
case 3249:
case 842:
case 1815:
case 3378:
case 3753:
case 3634:
case 1544:
case 566:
case 2145:
case 1640:
case 836:
case 3719:
case 3943:
case 375:
case 1319:
case 922:
case 1075:
case 1274:
case 1534:
case 2135:
case 1630:
case 394:
case 3106:
case 3892:
case 1778:
case 905:
case 3494:
case 3908:
case 128:
case 3239:
case 1082:
case 3722:
case 2645:
case 2495:
case 2039:
case 2810:
case 1381:
case 996:
case 3501:
case 3860:
case 3386:
case 1413:
case 1786:
case 1864:
case 3026:
case 466:
case 3781:
case 1601:
case 2297:
case 1462:
case 2049:
case 3916:
case 2168:
case 1887:
case 3118:
case 3256:
case 3144:
case 1130:
case 2635:
case 1404:
case 1998:
case 3527:
case 1911:
case 2723:
case 3191:
case 2070:
case 987:
case 1304:
case 3584:
case 2016:
case 1700:
case 3680:
case 1422:
case 400:
case 462:
case 1558:
case 2899:
case 3066:
case 4014:
case 4048:
case 1983:
case 3567:
case 357:
case 1855:
case 1362:
case 6:
case 2926:
case 2517:
case 3486:
case 2712:
case 3939:
case 1313:
case 3208:
case 512:
case 3762:
case 1481:
case 167:
case 4038:
case 666:
case 3820:
case 3658:
case 2242:
case 1684:
case 3704:
case 3300:
case 1580:
case 2777:
case 3696:
case 4050:
case 175:
case 3534:
case 1618:
case 3630:
case 556:
case 1540:
case 2369:
case 2282:
case 1691:
case 876:
case 3778:
case 194:
case 1579:
case 3101:
case 1239:
case 328:
case 3490:
case 2221:
case 3815:
case 1431:
case 1097:
case 1249:
case 3436:
case 193:
case 1753:
case 3127:
case 3544:
case 2405:
case 1530:
case 483:
case 609:
case 2051:
case 1719:
case 1596:
case 1956:
case 345:
case 2825:
case 3211:
case 60:
case 1158:
case 2172:
case 4093:
case 3184:
case 2261:
case 1746:
case 3336:
case 1478:
case 787:
case 2117:
case 3794:
case 3390:
case 684:
case 3167:
case 3741:
case 317:
case 1331:
case 3731:
case 1341:
case 872:
case 1736:
case 3453:
case 3346:
case 2469:
case 1180:
case 701:
case 3419:
case 2263:
case 3609:
case 134:
case 4091:
case 1828:
case 373:
case 742:
case 4018:
case 2046:
case 1308:
case 3213:
case 1554:
case 1650:
case 1333:
case 1200:
case 2475:
case 3743:
case 2547:
case 1199:
case 1525:
case 2732:
case 903:
case 2969:
case 3259:
case 904:
case 321:
case 2742:
case 35:
case 1456:
case 3204:
case 3733:
case 2537:
case 3654:
case 2212:
case 1176:
case 3708:
case 1978:
case 2952:
case 4034:
case 3262:
case 989:
case 3665:
case 2592:
case 1931:
case 3052:
case 2879:
case 3990:
case 2615:
case 3103:
case 3222:
case 2840:
case 3351:
case 205:
case 2019:
case 2375:
case 1433:
case 169:
case 746:
case 2896:
case 2102:
case 2053:
case 1286:
case 732:
case 3281:
case 144:
case 3857:
case 3593:
case 936:
case 1154:
case 3676:
case 1246:
case 1063:
case 1817:
case 3294:
case 4027:
case 1671:
case 3439:
case 3711:
case 942:
case 1716:
case 1599:
case 1474:
case 585:
case 31:
case 3699:
case 106:
case 1077:
case 3316:
case 4001:
case 1311:
case 78:
case 1398:
case 805:
case 2366:
case 2880:
case 3571:
case 3449:
case 822:
case 1290:
case 1576:
case 1236:
case 3150:
case 2326:
case 3538:
case 1648:
case 3278:
case 1962:
case 1510:
case 3349:
case 102:
case 2192:
case 378:
case 4073:
case 481:
case 908:
case 1411:
case 2466:
case 789:
case 1498:
case 1904:
case 3503:
case 1383:
case 319:
case 3416:
case 191:
case 2502:
case 1603:
case 1770:
case 3845:
case 932:
case 3193:
case 2660:
case 350:
case 1749:
case 946:
case 3514:
case 2438:
case 2017:
case 1755:
case 2189:
case 307:
case 3067:
case 3566:
case 1800:
case 977:
case 1561:
case 450:
case 2072:
case 84:
case 1724:
case 569:
case 2799:
case 3084:
case 3073:
case 3720:
case 1142:
case 3661:
case 3487:
case 478:
case 2877:
case 1935:
case 711:
case 2812:
case 543:
case 2901:
case 3355:
case 650:
case 929:
case 1006:
case 3001:
case 2279:
case 2539:
case 41:
case 3760:
case 3822:
case 3424:
case 3302:
case 1582:
case 2683:
case 1507:
case 56:
case 1787:
case 2570:
case 2674:
case 3607:
case 4095:
case 3682:
case 83:
case 1420:
case 2296:
case 2823:
case 765:
case 2151:
case 2984:
case 534:
case 1764:
case 2549:
case 1521:
case 3917:
case 720:
case 2338:
case 297:
case 3257:
case 678:
case 3881:
case 777:
case 4069:
case 868:
case 1846:
case 2754:
case 2028:
case 897:
case 249:
case 2116:
case 2258:
case 621:
case 23:
case 410:
case 3166:
case 65:
case 695:
case 2944:
case 4052:
case 1737:
case 2280:
case 2643:
case 72:
case 591:
case 1542:
case 882:
case 502:
case 1836:
case 830:
case 2139:
case 1792:
case 45:
case 2393:
case 840:
case 3878:
case 4005:
case 2488:
case 2206:
case 3447:
case 729:
case 1107:
case 1040:
case 3034:
case 1096:
case 2068:
case 2551:
case 659:
case 1030:
case 239:
case 3091:
case 473:
case 4029:
case 2450:
case 1121:
case 1597:
case 3928:
case 1853:
case 2149:
case 2765:
case 965:
case 3392:
case 3937:
case 918:
case 2391:
case 2344:
case 635:
case 1669:
case 598:
case 1357:
case 2210:
case 2092:
case 112:
case 2950:
case 3093:
case 1065:
case 890:
case 2897:
case 3757:
case 445:
case 628:
case 2186:
case 1287:
case 417:
case 2730:
case 1851:
case 3569:
case 1202:
case 1123:
case 1768:
case 2796:
case 3947:
case 861:
case 2832:
case 3843:
case 927:
case 3785:
case 2434:
case 1605:
case 2047:
case 1054:
case 2993:
case 1889:
case 383:
case 2546:
case 2631:
case 1163:
case 1915:
case 4075:
case 2694:
case 847:
case 2590:
case 2641:
case 3992:
case 384:
case 1457:
case 97:
case 617:
case 2536:
case 3050:
case 2491:
case 2037:
case 1177:
case 3505:
case 1385:
case 2444:
case 3468:
case 815:
case 779:
case 1345:
case 3623:
case 3472:
case 2807:
case 247:
case 2467:
case 152:
case 718:
case 3417:
case 1839:
case 1010:
case 3038:
case 2971:
case 3048:
case 2821:
case 2265:
case 3883:
case 1870:
case 3924:
case 457:
case 2473:
case 2002:
case 1335:
case 671:
case 2225:
case 1435:
case 366:
case 2373:
case 2861:
case 3987:
case 913:
case 2662:
case 727:
case 2914:
case 2948:
case 2401:
case 1563:
case 290:
case 624:
case 3612:
case 2254:
case 2055:
case 2613:
case 2136:
case 1512:
case 1960:
case 594:
case 657:
case 237:
case 2190:
case 3071:
case 2938:
case 2659:
case 1237:
case 2384:
case 1445:
case 3105:
case 156:
case 77:
case 2531:
case 2271:
case 1808:
case 3629:
case 1050:
case 1992:
case 1328:
case 3112:
case 2646:
case 2430:
case 316:
case 1505:
case 1468:
case 211:
case 494:
case 963:
case 1843:
case 964:
case 3224:
case 1785:
case 2440:
case 3605:
case 3025:
case 3728:
case 3255:
case 3889:
case 2965:
case 93:
case 1088:
case 949:
case 2113:
case 2479:
case 3163:
case 3065:
case 768:
case 220:
case 2379:
case 2954:
case 4032:
case 523:
case 1757:
case 94:
case 2214:
case 3652:
case 3287:
case 1569:
case 3851:
case 2718:
case 3768:
case 2925:
case 2619:
case 2396:
case 571:
case 2875:
case 851:
case 3485:
case 2330:
case 3669:
case 2203:
case 2734:
case 2578:
case 2238:
case 1552:
case 782:
case 3357:
case 2909:
case 4042:
case 524:
case 730:
case 2250:
case 3512:
case 3076:
case 2910:
case 2562:
case 4007:
case 986:
case 940:
case 3445:
case 3577:
case 2504:
case 3237:
case 2020:
case 3435:
case 1898:
case 749:
case 166:
case 2784:
case 1811:
case 3816:
case 865:
case 535:
case 2767:
case 2141:
case 764:
case 2513:
case 2288:
case 2406:
case 667:
case 431:
case 1014:
case 1955:
case 517:
case 2826:
case 4061:
case 162:
case 2999:
case 3870:
case 968:
case 545:
case 1745:
case 739:
case 1169:
case 997:
case 2727:
case 2458:
case 1623:
case 641:
case 467:
case 498:
case 1874:
case 3920:
case 2701:
case 2976:
case 3839:
case 0:
case 188:
case 1152:
case 2291:
case 3420:
case 4063:
case 1682:
case 2583:
case 1607:
case 2244:
case 1027:
case 1972:
case 691:
case 3521:
case 1917:
case 3886:
case 1257:
case 602:
case 2476:
case 2714:
case 2310:
case 2748:
case 2738:
case 258:
case 2649:
case 1760:
case 1364:
case 4077:
case 854:
case 406:
case 4012:
case 755:
case 2980:
case 947:
case 1175:
case 2703:
case 2234:
case 1387:
case 595:
case 3507:
case 87:
case 1424:
case 3582:
case 1302:
case 2499:
case 879:
case 1661:
case 402:
case 460:
case 181:
case 2399:
case 3080:
case 1324:
case 3142:
case 799:
case 2906:
case 818:
case 425:
case 648:
case 2376:
case 2410:
case 1813:
case 3460:
case 4023:
case 3945:
case 2598:
case 3800:
case 2511:
case 3724:
case 3320:
case 1084:
case 3132:
case 1859:
case 2143:
case 990:
case 3561:
case 438:
case 1437:
case 434:
case 2556:
case 3819:
case 3030:
case 1044:
case 1018:
case 1715:
case 46:
case 2409:
case 813:
case 3597:
case 2793:
case 3079:
case 1697:
case 2852:
case 1878:
case 2365:
case 3315:
case 3040:
case 1034:
case 2425:
case 1447:
case 385:
case 1575:
case 1235:
case 3107:
case 433:
case 715:
case 66:
case 2805:
case 519:
case 3542:
case 2273:
case 443:
case 1347:
case 2979:
case 2750:
case 634:
case 1831:
case 2508:
case 858:
case 2465:
case 3836:
case 3957:
case 550:
case 2267:
case 469:
case 3217:
case 2788:
case 633:
case 1841:
case 3161:
case 3747:
case 2284:
case 1337:
case 1968:
case 3272:
case 1642:
case 2111:
case 2930:
case 2650:
case 597:
case 654:
case 2828:
case 3094:
case 1263:
case 945:
case 234:
case 757:
case 723:
case 67:
case 917:
case 1969:
case 1475:
case 3637:
case 2200:
case 26:
case 3342:
case 2525:
case 1742:
case 418:
case 3647:
case 1277:
case 2343:
case 891:
case 2456:
case 126:
case 771:
case 825:
case 3031:
case 2978:
case 1952:
case 724:
case 3497:
case 530:
case 233:
case 653:
case 627:
case 2176:
case 582:
case 1615:
case 3397:
case 122:
case 2693:
case 243:
case 1592:
case 3160:
case 47:
case 1840:
case 586:
case 3432:
case 2356:
case 3775:
case 454:
case 1187:
case 2433:
case 453:
case 1375:
case 1896:
case 3442:
case 269:
case 1830:
case 3818:
case 3844:
case 244:
case 935:
case 1164:
case 2565:
case 1053:
case 2994:
case 2408:
case 2941:
case 618:
case 2817:
case 717:
case 844:
case 248:
case 3013:
case 1555:
case 614:
case 3867:
case 2246:
case 1524:
case 539:
case 2716:
case 1620:
case 1761:
case 1147:
case 869:
case 2474:
case 957:
case 3884:
case 3059:
case 1858:
case 2872:
case 2311:
case 3873:
case 2922:
case 458:
case 2483:
case 1137:
case 2077:
case 3624:
case 3004:
case 206:
case 2012:
case 613:
case 2236:
case 2109:
case 3421:
case 2290:
case 843:
case 1806:
case 2739:
case 3664:
case 202:
case 563:
case 3321:
case 728:
case 670:
case 3801:
case 2383:
case 1782:
case 2411:
case 1466:
case 2219:
case 735:
case 1502:
case 2770:
case 3307:
case 2023:
case 2603:
case 53:
case 3963:
case 3726:
case 1086:
case 1995:
case 834:
case 1721:
case 1660:
case 2165:
case 564:
case 3803:
case 3323:
case 2627:
case 2007:
case 3535:
case 759:
case 3275:
case 2082:
case 2506:
case 2413:
case 919:
case 1810:
case 2179:
case 3463:
case 2601:
case 2021:
case 1049:
case 710:
case 1297:
case 3157:
case 1966:
case 3477:
case 477:
case 3545:
case 2998:
case 1635:
case 2322:
case 1723:
case 2196:
case 2802:
case 1168:
case 241:
case 950:
case 2887:
case 2824:
case 62:
case 2673:
case 336:
case 3185:
case 1572:
case 651:
case 2558:
case 3312:
case 2289:
case 1763:
case 3795:
case 342:
case 429:
case 3363:
case 91:
case 677:
case 3871:
case 3617:
case 75:
case 4060:
case 3423:
case 795:
case 3672:
case 59:
case 2359:
case 721:
case 2974:
case 3982:
case 2618:
case 1282:
case 389:
case 275:
case 2441:
case 2494:
case 411:
case 898:
case 2753:
case 3557:
case 1352:
case 2378:
case 1221:
case 2097:
case 910:
case 2719:
case 1568:
case 561:
case 3056:
case 2270:
case 3145:
case 2216:
case 2158:
case 1261:
case 420:
case 4015:
case 841:
case 2956:
case 1825:
case 303:
case 3729:
case 2331:
case 1854:
case 1528:
case 465:
case 2478:
case 1452:
case 3628:
case 3008:
case 995:
case 2341:
case 304:
case 1329:
case 2394:
case 921:
case 2790:
case 515:
case 38:
case 3705:
case 71:
case 2762:
case 828:
case 906:
case 1617:
case 3712:
case 3777:
case 2300:
case 2233:
case 376:
case 1672:
case 2658:
case 1423:
case 1982:
case 1907:
case 2970:
case 2759:
case 565:
case 1098:
case 835:
case 2066:
case 3899:
case 76:
case 3232:
case 1185:
case 2680:
case 1377:
case 2584:
case 637:
case 1312:
case 3128:
case 2713:
case 3926:
case 734:
case 4087:
case 142:
case 4002:
case 520:
case 2567:
case 3763:
case 3049:
case 744:
case 1814:
case 3297:
case 4024:
case 2781:
case 1157:
case 2606:
case 1412:
case 647:
case 180:
case 3070:
case 2191:
case 3635:
case 1477:
case 146:
case 615:
case 938:
case 490:
case 4055:
case 2916:
case 845:
case 960:
case 902:
case 1803:
case 2722:
case 2134:
case 2400:
case 1074:
case 991:
case 2386:
case 1463:
case 925:
case 3810:
case 3039:
case 108:
case 3495:
case 372:
case 2346:
case 1008:
case 455:
case 49:
case 3809:
case 3975:
case 933:
case 18:
case 2419:
case 1033:
case 529:
case 2173:
case 3469:
case 1585:
case 2951:
case 3172:
case 3825:
case 1266:
case 217:
case 2167:
case 2741:
case 3854:
case 2390:
case 2794:
case 1888:
case 1729:
case 748:
case 2336:
case 3528:
case 96:
case 969:
case 1226:
case 1893:
case 2989:
case 2436:
case 2679:
case 577:
case 738:
case 2815:
case 823:
case 3051:
case 944:
case 235:
case 2283:
case 655:
case 1769:
case 2591:
case 1056:
case 2127:
case 52:
case 1135:
case 2630:
case 791:
case 2274:
case 2534:
case 943:
case 1668:
case 2696:
case 189:
case 725:
case 2319:
case 702:
case 4037:
case 760:
case 3429:
case 228:
case 2101:
case 3657:
case 2353:
case 2778:
case 3102:
case 3896:
case 1442:
case 3375:
case 3830:
case 741:
case 4028:
case 2593:
case 2857:
case 2946:
case 210:
case 1515:
case 3053:
case 2148:
case 2114:
case 2138:
case 2990:
case 3879:
case 3592:
case 514:
case 322:
case 305:
case 639:
case 2351:
case 3840:
case 3905:
case 1834:
case 2222:
case 994:
case 2103:
case 81:
case 819:
case 3537:
case 2733:
case 1332:
case 2625:
case 63:
case 2389:
case 2171:
case 2262:
case 767:
case 878:
case 2708:
case 798:
case 2550:
case 664:
case 3212:
case 663:
case 2213:
case 2588:
case 1295:
case 2029:
case 2259:
case 1342:
case 2919:
case 3124:
case 1637:
case 2743:
case 2845:
case 2900:
case 1307:
case 2783:
case 3587:
case 1269:
case 2610:
case 793:
case 630:
case 3564:
case 4072:
case 250:
case 3660:
case 682:
case 2193:
case 1081:
case 1321:
case 1664:
case 554:
case 1801:
case 668:
case 2278:
case 2538:
case 1252:
case 794:
case 1022:
case 85:
case 1602:
case 2416:
case 57:
case 1687:
case 2774:
case 440:
case 2835:
case 3466:
case 821:
case 775:
case 101:
case 3880:
case 3366:
case 482:
case 1004:
case 1624:
case 2316:
case 2699:
case 1520:
case 2470:
case 859:
case 998:
case 2150:
case 1655:
case 192:
case 1421:
case 2449:
case 1062:
case 2231:
case 518:
case 2571:
case 2095:
case 2241:
case 810:
case 2294:
case 2188:
case 640:
case 3555:
case 1013:
case 1867:
case 3761:
case 3147:
case 468:
case 1407:
case 3524:
case 1482:
case 1766:
case 497:
case 1884:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757869201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,];
var gg_b = "1757869201/";

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
