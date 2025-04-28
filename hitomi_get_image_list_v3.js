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
case 3636:
case 2104:
case 2873:
case 3637:
case 2171:
case 2074:
case 3735:
case 2323:
case 1556:
case 2221:
case 405:
case 1483:
case 3859:
case 940:
case 2443:
case 3768:
case 2462:
case 2398:
case 4060:
case 2641:
case 3473:
case 3907:
case 589:
case 3906:
case 3615:
case 1830:
case 4084:
case 3934:
case 1193:
case 568:
case 3044:
case 2459:
case 2963:
case 3843:
case 635:
case 1709:
case 2115:
case 643:
case 3563:
case 2572:
case 1783:
case 317:
case 2534:
case 970:
case 661:
case 3468:
case 300:
case 1242:
case 1154:
case 815:
case 2507:
case 3300:
case 2506:
case 1622:
case 1409:
case 2868:
case 673:
case 4027:
case 722:
case 2219:
case 3948:
case 118:
case 3417:
case 717:
case 3416:
case 6:
case 214:
case 489:
case 2790:
case 2518:
case 2675:
case 928:
case 530:
case 1469:
case 343:
case 2777:
case 3225:
case 1452:
case 1824:
case 2731:
case 2702:
case 3175:
case 1374:
case 3503:
case 3014:
case 1185:
case 2989:
case 1039:
case 2145:
case 1949:
case 3384:
case 3747:
case 1098:
case 2611:
case 3746:
case 2567:
case 2294:
case 3645:
case 743:
case 3360:
case 735:
case 2351:
case 3279:
case 1212:
case 3966:
case 3:
case 761:
case 1886:
case 1887:
case 430:
case 1795:
case 2490:
case 4092:
case 1858:
case 1696:
case 2903:
case 373:
case 664:
case 2253:
case 20:
case 3831:
case 2164:
case 3680:
case 773:
case 1579:
case 3512:
case 3133:
case 1994:
case 899:
case 211:
case 622:
case 2520:
case 1289:
case 3664:
case 3918:
case 2249:
case 946:
case 600:
case 2633:
case 3708:
case 2876:
case 2708:
case 3633:
case 1458:
case 261:
case 3249:
case 1338:
case 2877:
case 2918:
case 2326:
case 3520:
case 1640:
case 311:
case 1487:
case 1486:
case 2680:
case 997:
case 1724:
case 2831:
case 667:
case 3164:
case 1399:
case 986:
case 711:
case 2589:
case 30:
case 3476:
case 3713:
case 3253:
case 1925:
case 3477:
case 3903:
case 3490:
case 1000:
case 3629:
case 2:
case 1197:
case 2279:
case 1170:
case 3402:
case 2967:
case 3566:
case 3294:
case 3567:
case 1787:
case 2746:
case 1424:
case 2747:
case 1852:
case 1218:
case 206:
case 383:
case 3145:
case 2408:
case 1344:
case 3989:
case 1895:
case 2014:
case 2111:
case 2050:
case 2005:
case 3731:
case 1267:
case 3912:
case 1266:
case 1594:
case 235:
case 3777:
case 94:
case 2920:
case 3413:
case 3776:
case 3790:
case 2542:
case 2065:
case 418:
case 314:
case 1207:
case 3762:
case 1582:
case 1122:
case 189:
case 1206:
case 2417:
case 3759:
case 264:
case 1272:
case 2038:
case 1234:
case 168:
case 1027:
case 2355:
case 3816:
case 3817:
case 2392:
case 3534:
case 714:
case 217:
case 865:
case 1181:
case 2843:
case 980:
case 136:
case 3459:
case 3963:
case 808:
case 3339:
case 831:
case 2044:
case 2288:
case 2578:
case 2717:
case 2257:
case 2906:
case 3462:
case 2907:
case 3398:
case 2473:
case 3641:
case 3443:
case 2768:
case 683:
case 3136:
case 2604:
case 1350:
case 1305:
case 479:
case 1628:
case 3074:
case 2862:
case 3001:
case 3032:
case 3820:
case 260:
case 3397:
case 3396:
case 2258:
case 1054:
case 1151:
case 2577:
case 3489:
case 3370:
case 2576:
case 2531:
case 2286:
case 1247:
case 2812:
case 629:
case 977:
case 1246:
case 3913:
case 2638:
case 3703:
case 131:
case 1849:
case 1725:
case 710:
case 3199:
case 1627:
case 1626:
case 3546:
case 2340:
case 1010:
case 3547:
case 3412:
case 2699:
case 1987:
case 3674:
case 3867:
case 415:
case 2037:
case 947:
case 2418:
case 2071:
case 2803:
case 1595:
case 1208:
case 2101:
case 2513:
case 353:
case 1345:
case 1660:
case 2015:
case 4081:
case 1093:
case 3931:
case 2466:
case 3144:
case 3712:
case 3252:
case 3403:
case 1684:
case 3976:
case 3295:
case 2644:
case 3508:
case 437:
case 1655:
case 21:
case 1756:
case 2406:
case 2842:
case 482:
case 1757:
case 4070:
case 2472:
case 3959:
case 729:
case 2354:
case 3568:
case 76:
case 3517:
case 142:
case 1040:
case 610:
case 1930:
case 329:
case 3778:
case 3442:
case 3661:
case 607:
case 134:
case 1991:
case 1268:
case 3943:
case 238:
case 2064:
case 1509:
case 3322:
case 3105:
case 1583:
case 1123:
case 981:
case 716:
case 2448:
case 2734:
case 3075:
case 830:
case 2650:
case 2605:
case 2328:
case 2878:
case 1457:
case 1336:
case 2707:
case 2559:
case 3283:
case 2614:
case 499:
case 1139:
case 3573:
case 2935:
case 3478:
case 3742:
case 3011:
case 1085:
case 199:
case 2742:
case 472:
case 1857:
case 3935:
case 4085:
case 542:
case 3562:
case 3045:
case 2573:
case 3291:
case 534:
case 941:
case 2848:
case 3968:
case 1243:
case 3707:
case 1262:
case 3706:
case 3328:
case 3650:
case 1623:
case 766:
case 1719:
case 2150:
case 1909:
case 1983:
case 2322:
case 2834:
case 338:
case 1721:
case 3064:
case 971:
case 2033:
case 2806:
case 442:
case 2661:
case 3080:
case 229:
case 2516:
case 1482:
case 572:
case 2517:
case 3434:
case 3354:
case 693:
case 1100:
case 2209:
case 1096:
case 1097:
case 2959:
case 3472:
case 963:
case 26:
case 3842:
case 2535:
case 459:
case 2029:
case 182:
case 1192:
case 2508:
case 2976:
case 1213:
case 2977:
case 2403:
case 531:
case 2252:
case 2144:
case 2041:
case 2902:
case 2931:
case 4093:
case 3015:
case 932:
case 852:
case 253:
case 3513:
case 3004:
case 3101:
case 3174:
case 1749:
case 1825:
case 2601:
case 3224:
case 4028:
case 2674:
case 115:
case 1494:
case 1231:
case 1127:
case 3766:
case 1586:
case 3665:
case 760:
case 1995:
case 1290:
case 2165:
case 523:
case 3420:
case 1333:
case 1453:
case 1651:
case 207:
case 3812:
case 210:
case 1329:
case 793:
case 3502:
case 704:
case 879:
case 3577:
case 3590:
case 3718:
case 2396:
case 565:
case 601:
case 2397:
case 360:
case 2820:
case 3908:
case 4025:
case 548:
case 2321:
case 2804:
case 3162:
case 2659:
case 374:
case 29:
case 478:
case 904:
case 2003:
case 2836:
case 3066:
case 1378:
case 3067:
case 3159:
case 3388:
case 426:
case 519:
case 3404:
case 690:
case 1130:
case 2239:
case 671:
case 960:
case 3018:
case 3841:
case 3356:
case 2550:
case 3357:
case 809:
case 2815:
case 1094:
case 1191:
case 3617:
case 75:
case 796:
case 4079:
case 3561:
case 3715:
case 3200:
case 1781:
case 2116:
case 1422:
case 578:
case 2117:
case 1854:
case 448:
case 3292:
case 344:
case 247:
case 1555:
case 169:
case 1998:
case 3736:
case 1810:
case 2168:
case 35:
case 2089:
case 787:
case 188:
case 1592:
case 1049:
case 419:
case 1363:
case 732:
case 2319:
case 284:
case 1232:
case 1201:
case 1951:
case 2411:
case 502:
case 1274:
case 2108:
case 827:
case 3445:
case 1124:
case 812:
case 390:
case 2544:
case 2733:
case 3608:
case 371:
case 325:
case 1652:
case 3999:
case 3811:
case 3574:
case 4057:
case 790:
case 2394:
case 3113:
case 3260:
case 3501:
case 2729:
case 771:
case 155:
case 1669:
case 1797:
case 2613:
case 3938:
case 3284:
case 4088:
case 65:
case 420:
case 2147:
case 495:
case 1527:
case 341:
case 1187:
case 1186:
case 2353:
case 3646:
case 2565:
case 2932:
case 1312:
case 3829:
case 3745:
case 2974:
case 1158:
case 2864:
case 2677:
case 281:
case 1496:
case 2063:
case 644:
case 2631:
case 2602:
case 3190:
case 3006:
case 3007:
case 741:
case 3177:
case 1840:
case 1551:
case 3429:
case 3880:
case 2007:
case 2006:
case 1299:
case 3631:
case 2072:
case 2833:
case 381:
case 3677:
case 3349:
case 555:
case 2102:
case 2226:
case 2944:
case 4019:
case 1687:
case 1440:
case 3599:
case 1686:
case 2745:
case 916:
case 2647:
case 3901:
case 3042:
case 3711:
case 3251:
case 3565:
case 2646:
case 3433:
case 1320:
case 3353:
case 1896:
case 241:
case 1658:
case 1870:
case 1318:
case 455:
case 2938:
case 3613:
case 69:
case 3475:
case 1169:
case 3729:
case 313:
case 1057:
case 2811:
case 225:
case 271:
case 2325:
case 4021:
case 3544:
case 2875:
case 3108:
case 1485:
case 3078:
case 862:
case 1366:
case 2780:
case 1372:
case 384:
case 296:
case 2668:
case 2771:
case 1454:
case 953:
case 119:
case 25:
case 1822:
case 833:
case 3089:
case 2635:
case 469:
case 2736:
case 2737:
case 244:
case 2020:
case 2292:
case 3117:
case 148:
case 650:
case 2200:
case 1109:
case 2715:
case 2561:
case 232:
case 2616:
case 3741:
case 287:
case 1793:
case 1630:
case 3815:
case 79:
case 910:
case 1428:
case 3961:
case 2357:
case 756:
case 569:
case 1183:
case 2841:
case 4094:
case 3550:
case 3505:
case 2356:
case 2018:
case 1348:
case 875:
case 821:
case 2404:
case 588:
case 1754:
case 3223:
case 1250:
case 1205:
case 2415:
case 1955:
case 3837:
case 3441:
case 2673:
case 3836:
case 2066:
case 274:
case 3173:
case 777:
case 1539:
case 3321:
case 2387:
case 1760:
case 1153:
case 2386:
case 3580:
case 1679:
case 2620:
case 3564:
case 585:
case 2438:
case 351:
case 1427:
case 2112:
case 3270:
case 780:
case 2240:
case 409:
case 2945:
case 3732:
case 751:
case 2529:
case 1280:
case 3899:
case 1985:
case 240:
case 1570:
case 2068:
case 175:
case 121:
case 3838:
case 1596:
case 1597:
case 826:
case 686:
case 3603:
case 1484:
case 2444:
case 3166:
case 1727:
case 2103:
case 914:
case 2874:
case 2801:
case 3545:
case 819:
case 133:
case 3043:
case 2618:
case 4083:
case 1091:
case 3369:
case 3933:
case 1194:
case 3395:
case 2964:
case 1245:
case 3474:
case 2285:
case 3432:
case 3401:
case 2980:
case 3352:
case 1522:
case 1182:
case 983:
case 2971:
case 1058:
case 458:
case 739:
case 2714:
case 2254:
case 162:
case 74:
case 1086:
case 2047:
case 1316:
case 2937:
case 1317:
case 2046:
case 3642:
case 2672:
case 3076:
case 3663:
case 1492:
case 3077:
case 1368:
case 651:
case 3090:
case 1400:
case 257:
case 1335:
case 2915:
case 1119:
case 2210:
case 3941:
case 2861:
case 3031:
case 2606:
case 3134:
case 1993:
case 2541:
case 527:
case 3515:
case 1237:
case 1581:
case 3678:
case 1024:
case 1236:
case 802:
case 1373:
case 512:
case 1271:
case 1204:
case 895:
case 2414:
case 820:
case 3536:
case 1910:
case 3148:
case 2450:
case 2405:
case 1215:
case 1755:
case 1700:
case 3537:
case 3281:
case 2293:
case 1657:
case 1792:
case 203:
case 90:
case 2648:
case 3013:
case 294:
case 4095:
case 1839:
case 4069:
case 797:
case 3383:
case 1688:
case 198:
case 1157:
case 2571:
case 1095:
case 1922:
case 2383:
case 27:
case 2013:
case 2504:
case 303:
case 286:
case 498:
case 1052:
case 1241:
case 2148:
case 1423:
case 3450:
case 3008:
case 961:
case 1359:
case 346:
case 691:
case 1498:
case 2515:
case 2678:
case 3541:
case 703:
case 3861:
case 3606:
case 2941:
case 2172:
case 776:
case 1723:
case 3750:
case 3210:
case 357:
case 3915:
case 2222:
case 424:
case 2107:
case 2090:
case 3634:
case 2076:
case 24:
case 855:
case 3672:
case 1619:
case 2663:
case 462:
case 4087:
case 2642:
case 4086:
case 1798:
case 3047:
case 728:
case 1510:
case 1800:
case 254:
case 4058:
case 3714:
case 3254:
case 112:
case 158:
case 376:
case 1739:
case 757:
case 4030:
case 3285:
case 1751:
case 2118:
case 922:
case 1694:
case 1083:
case 2844:
case 1313:
case 2369:
case 370:
case 3575:
case 521:
case 2043:
case 2062:
case 3324:
case 3799:
case 770:
case 1125:
case 1585:
case 3765:
case 3511:
case 3103:
case 1275:
case 1970:
case 3444:
case 1997:
case 603:
case 2603:
case 964:
case 1996:
case 475:
case 3068:
case 533:
case 676:
case 1377:
case 1233:
case 340:
case 1302:
case 1331:
case 1451:
case 2899:
case 2732:
case 3240:
case 3112:
case 1179:
case 628:
case 2975:
case 2564:
case 2296:
case 2297:
case 3620:
case 1540:
case 3017:
case 3016:
case 2612:
case 2120:
case 2580:
case 1229:
case 3386:
case 657:
case 194:
case 1648:
case 2839:
case 103:
case 2792:
case 685:
case 3157:
case 486:
case 3156:
case 47:
case 3922:
case 2700:
case 2215:
case 1330:
case 3423:
case 1450:
case 3052:
case 3241:
case 539:
case 1293:
case 1008:
case 3439:
case 146:
case 2271:
case 1414:
case 1178:
case 841:
case 3593:
case 497:
case 1228:
case 2823:
case 2236:
case 2373:
case 2237:
case 2024:
case 2581:
case 2121:
case 758:
case 1163:
case 1210:
case 2400:
case 1915:
case 2335:
case 1861:
case 1606:
case 1607:
case 2492:
case 586:
case 3554:
case 2368:
case 4090:
case 3619:
case 224:
case 44:
case 863:
case 727:
case 4077:
case 128:
case 1634:
case 3682:
case 2086:
case 262:
case 3855:
case 2928:
case 3800:
case 327:
case 597:
case 1046:
case 1936:
case 1047:
case 3510:
case 1971:
case 2522:
case 18:
case 2182:
case 454:
case 1904:
case 890:
case 1254:
case 2940:
case 2030:
case 785:
case 2245:
case 3694:
case 949:
case 1285:
case 3751:
case 3211:
case 3313:
case 170:
case 2091:
case 1575:
case 245:
case 85:
case 93:
case 233:
case 191:
case 4043:
case 1964:
case 896:
case 3585:
case 1874:
case 1511:
case 1103:
case 1801:
case 1666:
case 1324:
case 1667:
case 1799:
case 2308:
case 580:
case 2625:
case 385:
case 2484:
case 1738:
case 2727:
case 551:
case 844:
case 3970:
case 275:
case 221:
case 658:
case 612:
case 1068:
case 3649:
case 3376:
case 2570:
case 2597:
case 3826:
case 3827:
case 2264:
case 1240:
case 1035:
case 627:
case 3331:
case 979:
case 309:
case 1529:
case 1189:
case 2784:
case 1438:
case 3653:
case 3179:
case 480:
case 709:
case 2760:
case 3229:
case 3540:
case 1017:
case 2346:
case 1499:
case 2851:
case 2679:
case 1612:
case 3346:
case 2540:
case 3851:
case 4016:
case 775:
case 1580:
case 1120:
case 151:
case 1975:
case 2653:
case 856:
case 180:
case 1296:
case 1564:
case 1732:
case 1911:
case 2302:
case 2451:
case 3149:
case 662:
case 1774:
case 877:
case 4068:
case 2826:
case 2233:
case 2649:
case 2377:
case 968:
case 2970:
case 1167:
case 285:
case 3625:
case 2996:
case 3484:
case 1603:
case 3308:
case 989:
case 1929:
case 4073:
case 3460:
case 2585:
case 1844:
case 2083:
case 1395:
case 470:
case 884:
case 1043:
case 333:
case 2884:
case 3091:
case 540:
case 1933:
case 3194:
case 1401:
case 3030:
case 1118:
case 476:
case 48:
case 154:
case 3182:
case 2892:
case 675:
case 621:
case 546:
case 2510:
case 3316:
case 2798:
case 1461:
case 3317:
case 1642:
case 3928:
case 3087:
case 724:
case 4046:
case 1106:
case 1222:
case 1107:
case 1076:
case 14:
case 324:
case 1663:
case 2619:
case 3492:
case 428:
case 2554:
case 139:
case 457:
case 1031:
case 3993:
case 2981:
case 3400:
case 2723:
case 3237:
case 197:
case 3121:
case 3236:
case 2362:
case 2498:
case 1850:
case 1805:
case 4008:
case 3204:
case 3954:
case 2621:
case 633:
case 3271:
case 2359:
case 58:
case 3657:
case 2188:
case 2241:
case 2052:
case 3898:
case 1148:
case 557:
case 3215:
case 3700:
case 1281:
case 494:
case 2095:
case 2156:
case 1383:
case 2157:
case 403:
case 528:
case 3688:
case 398:
case 3792:
case 930:
case 186:
case 850:
case 2069:
case 1504:
case 3839:
case 1880:
case 2840:
case 4006:
case 795:
case 4007:
case 1429:
case 648:
case 1864:
case 150:
case 886:
case 1676:
case 2497:
case 2019:
case 1063:
case 702:
case 563:
case 2496:
case 3984:
case 1677:
case 1349:
case 2312:
case 1901:
case 3785:
case 1251:
case 1565:
case 302:
case 2158:
case 2082:
case 897:
case 441:
case 619:
case 1147:
case 1433:
case 2526:
case 320:
case 1353:
case 571:
case 395:
case 3658:
case 2695:
case 2770:
case 3926:
case 463:
case 1475:
case 1613:
case 2669:
case 3195:
case 3169:
case 1729:
case 959:
case 839:
case 490:
case 471:
case 2021:
case 2584:
case 2124:
case 854:
case 1733:
case 3367:
case 2951:
case 1078:
case 3624:
case 2232:
case 942:
case 1108:
case 3740:
case 2274:
case 288:
case 496:
case 319:
case 3822:
case 1089:
case 2939:
case 45:
case 1319:
case 965:
case 2363:
case 620:
case 3372:
case 2049:
case 2998:
case 3307:
case 269:
case 3306:
case 2261:
case 1168:
case 602:
case 3728:
case 2810:
case 1117:
case 348:
case 2422:
case 923:
case 2053:
case 574:
case 3079:
case 3109:
case 487:
case 2781:
case 1382:
case 2923:
case 2893:
case 1961:
case 1550:
case 1505:
case 1298:
case 3630:
case 1815:
case 3428:
case 3881:
case 3214:
case 596:
case 3348:
case 1239:
case 2130:
case 2378:
case 1837:
case 587:
case 1836:
case 1662:
case 1223:
case 3710:
case 3598:
case 3955:
case 2481:
case 4067:
case 908:
case 1804:
case 1173:
case 3539:
case 1321:
case 880:
case 3025:
case 1871:
case 1003:
case 3992:
case 851:
case 19:
case 931:
case 2025:
case 2992:
case 655:
case 278:
case 2539:
case 49:
case 1415:
case 2900:
case 3481:
case 2955:
case 2250:
case 1159:
case 2493:
case 2348:
case 2691:
case 1471:
case 226:
case 1388:
case 2214:
case 2754:
case 1404:
case 2881:
case 1143:
case 1841:
case 1436:
case 2523:
case 2183:
case 3893:
case 1357:
case 1950:
case 4012:
case 3923:
case 2410:
case 1715:
case 1255:
case 3781:
case 1617:
case 2793:
case 2079:
case 788:
case 1292:
case 3609:
case 59:
case 144:
case 3854:
case 769:
case 915:
case 1635:
case 447:
case 2728:
case 72:
case 3555:
case 1737:
case 577:
case 2307:
case 1736:
case 3049:
case 1668:
case 1771:
case 3363:
case 1704:
case 15:
case 2822:
case 219:
case 484:
case 3592:
case 870:
case 4078:
case 1445:
case 2366:
case 3560:
case 3232:
case 1780:
case 3951:
case 2485:
case 190:
case 3303:
case 1325:
case 88:
case 1875:
case 1764:
case 3584:
case 3021:
case 1260:
case 1532:
case 937:
case 1999:
case 1811:
case 828:
case 3797:
case 163:
case 1938:
case 3796:
case 1284:
case 2152:
case 2244:
case 3695:
case 550:
case 3187:
case 141:
case 2320:
case 2897:
case 688:
case 1464:
case 2686:
case 3082:
case 1745:
case 202:
case 3158:
case 2785:
case 1646:
case 999:
case 669:
case 1647:
case 3497:
case 62:
case 450:
case 1226:
case 4063:
case 3470:
case 481:
case 894:
case 1102:
case 1131:
case 2960:
case 3840:
case 2551:
case 1006:
case 2315:
case 615:
case 272:
case 2139:
case 1562:
case 1045:
case 416:
case 1393:
case 3857:
case 1968:
case 3243:
case 3421:
case 3888:
case 1559:
case 861:
case 1328:
case 1650:
case 3623:
case 1707:
case 3530:
case 1916:
case 2337:
case 1917:
case 1706:
case 3719:
case 56:
case 2123:
case 2371:
case 2821:
case 1734:
case 799:
case 2304:
case 873:
case 101:
case 2268:
case 2819:
case 1863:
case 234:
case 3983:
case 806:
case 737:
case 3721:
case 2509:
case 3482:
case 2930:
case 2040:
case 3100:
case 2692:
case 3419:
case 3097:
case 1748:
case 955:
case 2788:
case 1434:
case 1354:
case 2882:
case 2600:
case 3192:
case 337:
case 1406:
case 2217:
case 2757:
case 1407:
case 1973:
case 1720:
case 3213:
case 2684:
case 92:
case 223:
case 2425:
case 864:
case 1644:
case 3184:
case 3081:
case 1015:
case 2345:
case 2779:
case 1467:
case 1385:
case 2093:
case 2208:
case 817:
case 1803:
case 1071:
case 1174:
case 1418:
case 3749:
case 3825:
case 2958:
case 265:
case 3375:
case 1513:
case 2569:
case 1132:
case 2028:
case 2987:
case 2986:
case 3494:
case 2552:
case 1947:
case 1036:
case 1224:
case 1037:
case 969:
case 1946:
case 2010:
case 1665:
case 637:
case 1699:
case 3202:
case 2479:
case 2380:
case 3586:
case 3277:
case 2849:
case 1420:
case 3333:
case 3453:
case 3276:
case 1889:
case 3290:
case 3558:
case 2364:
case 208:
case 1531:
case 1502:
case 407:
case 2924:
case 410:
case 2247:
case 1812:
case 1590:
case 1718:
case 3449:
case 160:
case 1908:
case 2853:
case 1576:
case 2151:
case 2054:
case 553:
case 3054:
case 3151:
case 1489:
case 1820:
case 1397:
case 634:
case 1396:
case 3247:
case 2879:
case 2651:
case 3246:
case 3924:
case 107:
case 110:
case 2794:
case 731:
case 493:
case 2558:
case 3364:
case 2290:
case 1199:
case 308:
case 3627:
case 2995:
case 2022:
case 3626:
case 2333:
case 1913:
case 2453:
case 331:
case 2277:
case 2952:
case 3479:
case 2586:
case 1412:
case 2587:
case 1546:
case 1138:
case 659:
case 1866:
case 2494:
case 3552:
case 4036:
case 4037:
case 215:
case 1789:
case 4071:
case 919:
case 2749:
case 4004:
case 814:
case 1931:
case 2311:
case 1712:
case 765:
case 3345:
case 3660:
case 2081:
case 2524:
case 1508:
case 1403:
case 593:
case 1977:
case 1976:
case 504:
case 2160:
case 2753:
case 41:
case 1962:
case 3216:
case 3217:
case 734:
case 3600:
case 2192:
case 359:
case 3788:
case 608:
case 16:
case 1959:
case 631:
case 2096:
case 2100:
case 2155:
case 1807:
case 1778:
case 1806:
case 3235:
case 342:
case 3930:
case 1516:
case 2721:
case 3509:
case 1322:
case 883:
case 1033:
case 334:
case 438:
case 759:
case 4064:
case 1943:
case 2591:
case 3304:
case 80:
case 1150:
case 772:
case 1763:
case 3123:
case 3337:
case 2530:
case 3273:
case 3456:
case 51:
case 2623:
case 3198:
case 538:
case 2243:
case 995:
case 1848:
case 1742:
case 4045:
case 2856:
case 902:
case 2782:
case 1573:
case 116:
case 1381:
case 461:
case 1180:
case 3553:
case 1633:
case 3458:
case 2140:
case 1249:
case 816:
case 1164:
case 730:
case 3365:
case 2795:
case 3220:
case 2697:
case 1253:
case 535:
case 3925:
case 2858:
case 1477:
case 2696:
case 543:
case 1903:
case 3170:
case 2752:
case 1402:
case 1351:
case 2887:
case 3000:
case 3055:
case 1629:
case 3424:
case 1294:
case 829:
case 406:
case 2525:
case 2185:
case 3758:
case 3218:
case 4014:
case 561:
case 605:
case 3869:
case 1702:
case 1731:
case 3267:
case 2824:
case 2301:
case 2332:
case 1912:
case 3266:
case 4005:
case 3594:
case 4050:
case 3979:
case 2374:
case 2495:
case 1518:
case 435:
case 573:
case 1776:
case 3122:
case 3206:
case 3957:
case 2361:
case 218:
case 252:
case 3610:
case 4038:
case 3234:
case 3988:
case 3027:
case 368:
case 464:
case 1219:
case 2110:
case 2263:
case 1868:
case 2409:
case 2242:
case 1817:
case 1978:
case 3654:
case 2921:
case 1572:
case 3791:
case 933:
case 853:
case 1534:
case 417:
case 3314:
case 3181:
case 3521:
case 2709:
case 1459:
case 2891:
case 3248:
case 1339:
case 3693:
case 1398:
case 705:
case 2483:
case 1136:
case 1548:
case 517:
case 2128:
case 305:
case 500:
case 921:
case 2278:
case 1942:
case 1873:
case 1032:
case 1104:
case 736:
case 3430:
case 807:
case 3305:
case 1074:
case 1171:
case 522:
case 292:
case 2628:
case 1735:
case 3557:
case 2430:
case 4032:
case 1862:
case 379:
case 4074:
case 1637:
case 909:
case 1859:
case 3588:
case 205:
case 3681:
case 1578:
case 1615:
case 3830:
case 1716:
case 1473:
case 2693:
case 1906:
case 2248:
case 3919:
case 2084:
case 2181:
case 779:
case 804:
case 2314:
case 3193:
case 893:
case 1044:
case 1392:
case 1468:
case 33:
case 752:
case 3783:
case 117:
case 3921:
case 2730:
case 1300:
case 3242:
case 3154:
case 349:
case 3409:
case 164:
case 3263:
case 3110:
case 1948:
case 2272:
case 2234:
case 2027:
case 268:
case 2988:
case 2610:
case 73:
case 3361:
case 2957:
case 2206:
case 1417:
case 1773:
case 2582:
case 50:
case 1920:
case 143:
case 1225:
case 3495:
case 3374:
case 1050:
case 3023:
case 2594:
case 3301:
case 3452:
case 2979:
case 2267:
case 1175:
case 1408:
case 2869:
case 1813:
case 958:
case 106:
case 3949:
case 2218:
case 2758:
case 3185:
case 3525:
case 2895:
case 511:
case 1645:
case 3098:
case 927:
case 2852:
case 2424:
case 1746:
case 2685:
case 1:
case 2197:
case 2000:
case 3887:
case 2196:
case 1967:
case 652:
case 2170:
case 1279:
case 3858:
case 2220:
case 230:
case 3795:
case 40:
case 2549:
case 1512:
case 4061:
case 1831:
case 1446:
case 1447:
case 1680:
case 1918:
case 2338:
case 3140:
case 583:
case 1876:
case 1326:
case 2553:
case 1327:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745870401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,];
var gg_b = "1745870401/";

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
