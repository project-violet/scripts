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
case 599:
case 2746:
case 2996:
case 1223:
case 3091:
case 880:
case 2506:
case 411:
case 3595:
case 3167:
case 3047:
case 783:
case 3530:
case 2724:
case 4006:
case 685:
case 2938:
case 540:
case 2406:
case 2802:
case 3495:
case 3120:
case 3881:
case 1889:
case 2460:
case 375:
case 2558:
case 3011:
case 989:
case 3430:
case 591:
case 1708:
case 1548:
case 1338:
case 180:
case 2085:
case 1254:
case 3992:
case 3742:
case 3577:
case 1186:
case 2753:
case 2226:
case 1660:
case 827:
case 1993:
case 1743:
case 1503:
case 1658:
case 1231:
case 3860:
case 3477:
case 2313:
case 2207:
case 3774:
case 1627:
case 3522:
case 3476:
case 1861:
case 3869:
case 3872:
case 1644:
case 3807:
case 3230:
case 2654:
case 23:
case 2388:
case 1988:
case 2074:
case 19:
case 3295:
case 520:
case 2206:
case 1873:
case 2162:
case 2179:
case 1248:
case 3826:
case 1187:
case 147:
case 1052:
case 2258:
case 2975:
case 2631:
case 362:
case 3053:
case 1375:
case 1669:
case 3661:
case 3132:
case 2472:
case 2469:
case 2876:
case 882:
case 493:
case 94:
case 2526:
case 2623:
case 4044:
case 3277:
case 267:
case 2334:
case 2281:
case 3202:
case 4026:
case 2569:
case 847:
case 3155:
case 2822:
case 1757:
case 542:
case 2997:
case 1090:
case 2507:
case 3680:
case 445:
case 1035:
case 1397:
case 1728:
case 4072:
case 1531:
case 3539:
case 513:
case 1454:
case 786:
case 3560:
case 3427:
case 2905:
case 1182:
case 2595:
case 1790:
case 3603:
case 3996:
case 2109:
case 1028:
case 2415:
case 2689:
case 664:
case 1677:
case 1350:
case 1602:
case 191:
case 1735:
case 3724:
case 3137:
case 1305:
case 2120:
case 2881:
case 3527:
case 2495:
case 1368:
case 3406:
case 150:
case 174:
case 239:
case 822:
case 3916:
case 3558:
case 2577:
case 1589:
case 3581:
case 712:
case 2992:
case 941:
case 840:
case 1695:
case 4002:
case 1392:
case 3226:
case 4077:
case 3753:
case 743:
case 959:
case 3895:
case 2477:
case 1312:
case 1489:
case 1615:
case 951:
case 874:
case 899:
case 2402:
case 580:
case 2806:
case 3272:
case 3269:
case 3207:
case 3830:
case 753:
case 734:
case 260:
case 33:
case 41:
case 710:
case 3654:
case 2476:
case 547:
case 1480:
case 842:
case 1778:
case 2295:
case 992:
case 3260:
case 3258:
case 3975:
case 1639:
case 619:
case 2785:
case 852:
case 1580:
case 2576:
case 3162:
case 3042:
case 887:
case 3179:
case 4076:
case 1043:
case 915:
case 120:
case 485:
case 262:
case 59:
case 2053:
case 3407:
case 2925:
case 929:
case 3623:
case 305:
case 3526:
case 1461:
case 3469:
case 2129:
case 1008:
case 113:
case 1473:
case 2439:
case 1622:
case 1964:
case 3704:
case 3711:
case 1719:
case 1325:
case 367:
case 3334:
case 3507:
case 1065:
case 1145:
case 3747:
case 3118:
case 2166:
case 516:
case 2155:
case 3426:
case 187:
case 3572:
case 4039:
case 3569:
case 1573:
case 978:
case 820:
case 2349:
case 1359:
case 2680:
case 1847:
case 298:
case 1619:
case 3611:
case 819:
case 715:
case 3723:
case 3265:
case 2112:
case 642:
case 1081:
case 968:
case 2192:
case 1585:
case 1776:
case 2210:
case 480:
case 3647:
case 2003:
case 910:
case 1804:
case 125:
case 3691:
case 3394:
case 1027:
case 3457:
case 2499:
case 3138:
case 1242:
case 3428:
case 2252:
case 1058:
case 3116:
case 838:
case 620:
case 1274:
case 2150:
case 272:
case 2599:
case 3196:
case 1006:
case 3878:
case 2773:
case 1739:
case 2382:
case 111:
case 3983:
case 825:
case 1367:
case 2419:
case 3556:
case 4035:
case 3565:
case 1945:
case 2590:
case 3197:
case 2159:
case 1072:
case 1149:
case 2278:
case 3653:
case 2410:
case 1652:
case 1366:
case 3073:
case 3408:
case 2345:
case 1730:
case 1300:
case 4090:
case 3465:
case 155:
case 2490:
case 4010:
case 270:
case 254:
case 3748:
case 1715:
case 1329:
case 193:
case 1285:
case 3508:
case 404:
case 336:
case 864:
case 2435:
case 1853:
case 1777:
case 749:
case 3175:
case 674:
case 1542:
case 2363:
case 2371:
case 1963:
case 2932:
case 3810:
case 3387:
case 3333:
case 4052:
case 855:
case 943:
case 2452:
case 585:
case 207:
case 691:
case 3443:
case 1574:
case 1824:
case 3857:
case 277:
case 1113:
case 398:
case 2256:
case 3112:
case 2723:
case 3828:
case 3192:
case 1002:
case 2208:
case 1077:
case 604:
case 1657:
case 1370:
case 2819:
case 3003:
case 324:
case 2138:
case 1885:
case 200:
case 3499:
case 797:
case 1447:
case 926:
case 1253:
case 1511:
case 1994:
case 511:
case 2116:
case 1504:
case 3168:
case 2428:
case 450:
case 474:
case 4028:
case 1772:
case 1901:
case 3761:
case 1914:
case 3150:
case 372:
case 3599:
case 1547:
case 1383:
case 657:
case 1030:
case 1411:
case 3419:
case 1404:
case 2937:
case 2983:
case 2528:
case 2314:
case 440:
case 2731:
case 2878:
case 3773:
case 74:
case 2301:
case 1336:
case 1546:
case 202:
case 2653:
case 1706:
case 2061:
case 3590:
case 3159:
case 555:
case 3642:
case 4056:
case 452:
case 3410:
case 487:
case 1039:
case 3674:
case 333:
case 354:
case 708:
case 370:
case 196:
case 545:
case 2456:
case 2465:
case 3054:
case 3843:
case 2117:
case 3510:
case 781:
case 2979:
case 4043:
case 3363:
case 284:
case 1933:
case 1781:
case 564:
case 2646:
case 1553:
case 1656:
case 1665:
case 2543:
case 2333:
case 2703:
case 896:
case 2228:
case 1022:
case 3452:
case 3856:
case 1608:
case 1188:
case 2835:
case 1453:
case 1247:
case 3023:
case 2257:
case 365:
case 1291:
case 1102:
case 3683:
case 223:
case 3637:
case 148:
case 1177:
case 3775:
case 2894:
case 2609:
case 1093:
case 3221:
case 1385:
case 326:
case 2667:
case 2801:
case 2378:
case 3882:
case 1013:
case 3012:
case 972:
case 1200:
case 632:
case 1255:
case 1266:
case 1978:
case 2084:
case 3328:
case 509:
case 2096:
case 3741:
case 1999:
case 1749:
case 3050:
case 3501:
case 848:
case 1420:
case 1195:
case 2759:
case 4082:
case 762:
case 3357:
case 210:
case 3414:
case 3401:
case 2263:
case 2319:
case 1520:
case 858:
case 1870:
case 3904:
case 1764:
case 1919:
case 501:
case 3148:
case 3068:
case 2271:
case 268:
case 3287:
case 403:
case 356:
case 3871:
case 194:
case 295:
case 3025:
case 2445:
case 80:
case 3286:
case 253:
case 234:
case 46:
case 346:
case 212:
case 3796:
case 2161:
case 1051:
case 2335:
case 965:
case 1663:
case 2390:
case 3924:
case 907:
case 3356:
case 128:
case 243:
case 3131:
case 1122:
case 894:
case 2471:
case 775:
case 3845:
case 163:
case 2282:
case 835:
case 739:
case 1267:
case 2463:
case 3201:
case 1209:
case 3784:
case 3123:
case 1836:
case 731:
case 2180:
case 2942:
case 2792:
case 2571:
case 1952:
case 673:
case 2655:
case 2666:
case 566:
case 933:
case 2563:
case 3618:
case 4071:
case 1532:
case 383:
case 1342:
case 888:
case 2586:
case 1570:
case 2775:
case 2092:
case 226:
case 3667:
case 461:
case 1614:
case 900:
case 1601:
case 3609:
case 469:
case 2882:
case 2486:
case 1236:
case 3814:
case 809:
case 1809:
case 1694:
case 3620:
case 767:
case 3582:
case 1751:
case 2797:
case 3096:
case 1106:
case 2514:
case 2741:
case 1957:
case 1928:
case 1391:
case 2670:
case 4014:
case 1583:
case 1347:
case 1537:
case 4094:
case 1304:
case 1311:
case 73:
case 3038:
case 2414:
case 2233:
case 368:
case 3271:
case 2148:
case 1279:
case 2068:
case 3016:
case 2594:
case 87:
case 1483:
case 3445:
case 3887:
case 3310:
case 256:
case 2871:
case 1908:
case 3017:
case 2863:
case 1598:
case 353:
case 414:
case 406:
case 1832:
case 2286:
case 1064:
case 1270:
case 2716:
case 3335:
case 1518:
case 1965:
case 1956:
case 579:
case 2796:
case 594:
case 3161:
case 246:
case 3750:
case 312:
case 2131:
case 343:
case 1536:
case 1346:
case 1498:
case 2365:
case 2356:
case 535:
case 1633:
case 2924:
case 2698:
case 1800:
case 1237:
case 1713:
case 2845:
case 1855:
case 1462:
case 2487:
case 3712:
case 166:
case 3974:
case 3282:
case 563:
case 2636:
case 1353:
case 3075:
case 2294:
case 3571:
case 386:
case 3821:
case 3942:
case 3792:
case 283:
case 1943:
case 2618:
case 4087:
case 3655:
case 50:
case 2020:
case 2684:
case 3440:
case 1348:
case 1538:
case 359:
case 3315:
case 1721:
case 390:
case 3612:
case 1613:
case 2798:
case 3893:
case 1958:
case 2111:
case 1275:
case 2327:
case 1516:
case 2104:
case 784:
case 3540:
case 3330:
case 2718:
case 3700:
case 1082:
case 1693:
case 1596:
case 1438:
case 2009:
case 2191:
case 1157:
case 1128:
case 530:
case 2306:
case 2736:
case 2360:
case 3692:
case 3395:
case 1416:
case 351:
case 1812:
case 3668:
case 2616:
case 1850:
case 876:
case 2493:
case 3249:
case 1584:
case 458:
case 281:
case 2638:
case 4013:
case 1297:
case 736:
case 1981:
case 3989:
case 2779:
case 3185:
case 1787:
case 2593:
case 1484:
case 1868:
case 3377:
case 2381:
case 1825:
case 1216:
case 1786:
case 1575:
case 609:
case 967:
case 1071:
case 3079:
case 1143:
case 905:
case 3376:
case 3659:
case 2697:
case 2488:
case 2153:
case 40:
case 4088:
case 321:
case 1859:
case 3851:
case 378:
case 2849:
case 688:
case 1323:
case 297:
case 86:
case 3625:
case 601:
case 1634:
case 25:
case 3240:
case 2000:
case 1045:
case 1165:
case 428:
case 1907:
case 3767:
case 2066:
case 1969:
case 3961:
case 1284:
case 3549:
case 1541:
case 392:
case 67:
case 3036:
case 2675:
case 93:
case 1417:
case 4051:
case 2307:
case 3888:
case 1497:
case 315:
case 1354:
case 1688:
case 1441:
case 2029:
case 1108:
case 532:
case 2326:
case 837:
case 1944:
case 4034:
case 1450:
case 2729:
case 3358:
case 3020:
case 3684:
case 2440:
case 1094:
case 3111:
case 3948:
case 173:
case 1915:
case 409:
case 130:
case 1550:
case 2755:
case 576:
case 1199:
case 1001:
case 249:
case 1014:
case 960:
case 3288:
case 1505:
case 2700:
case 401:
case 2540:
case 2330:
case 2813:
case 3067:
case 3718:
case 2395:
case 488:
case 2083:
case 60:
case 1884:
case 1492:
case 3616:
case 47:
case 2668:
case 733:
case 3840:
case 308:
case 770:
case 1512:
case 873:
case 671:
case 3493:
case 1592:
case 389:
case 1838:
case 1771:
case 3762:
case 1977:
case 939:
case 3413:
case 1086:
case 694:
case 2989:
case 1412:
case 1225:
case 1816:
case 3234:
case 1763:
case 3903:
case 2732:
case 635:
case 3593:
case 2980:
case 2079:
case 2142:
case 1976:
case 1033:
case 1087:
case 3770:
case 2834:
case 3864:
case 3641:
case 1649:
case 34:
case 3032:
case 3697:
case 1817:
case 2376:
case 1841:
case 3849:
case 814:
case 1897:
case 278:
case 466:
case 2174:
case 3588:
case 1205:
case 3923:
case 2625:
case 2339:
case 658:
case 292:
case 1373:
case 3066:
case 3146:
case 2961:
case 2709:
case 1212:
case 2767:
case 1190:
case 1782:
case 3551:
case 2888:
case 3213:
case 3307:
case 4049:
case 1361:
case 3369:
case 2036:
case 503:
case 1939:
case 2449:
case 648:
case 3029:
case 1021:
case 114:
case 106:
case 4064:
case 215:
case 3451:
case 1459:
case 2564:
case 1110:
case 1292:
case 1754:
case 1428:
case 475:
case 3320:
case 2511:
case 3678:
case 2253:
case 2447:
case 1243:
case 877:
case 2726:
case 100:
case 439:
case 2885:
case 1138:
case 1878:
case 3739:
case 1731:
case 1983:
case 2404:
case 431:
case 311:
case 2411:
case 4047:
case 3367:
case 2030:
case 2707:
case 2095:
case 2337:
case 2547:
case 3274:
case 3060:
case 1557:
case 2914:
case 2769:
case 97:
case 1184:
case 1723:
case 524:
case 2246:
case 988:
case 703:
case 418:
case 1256:
case 3847:
case 76:
case 3485:
case 177:
case 3619:
case 1899:
case 901:
case 667:
case 3811:
case 909:
case 2370:
case 1970:
case 598:
case 2077:
case 3776:
case 1208:
case 2002:
case 605:
case 1333:
case 1543:
case 2665:
case 3474:
case 462:
case 3777:
case 2781:
case 285:
case 184:
case 507:
case 1979:
case 3702:
case 2291:
case 364:
case 2453:
case 2:
case 2188:
case 1890:
case 3846:
case 3442:
case 2022:
case 1936:
case 1408:
case 3355:
case 2318:
case 2643:
case 345:
case 1556:
case 1141:
case 884:
case 3072:
case 2706:
case 570:
case 1653:
case 966:
case 102:
case 2546:
case 2336:
case 1117:
case 3285:
case 1508:
case 2758:
case 3853:
case 355:
case 1852:
case 1456:
case 2842:
case 544:
case 3026:
case 3744:
case 3994:
case 3511:
case 2320:
case 2058:
case 662:
case 3015:
case 1168:
case 219:
case 3885:
case 3491:
case 3253:
case 2027:
case 1920:
case 898:
case 3411:
case 2367:
case 1685:
case 3030:
case 3404:
case 211:
case 2309:
case 1773:
case 824:
case 3901:
case 1909:
case 3772:
case 2006:
case 1150:
case 3914:
case 3383:
case 3547:
case 2274:
case 2060:
case 3707:
case 3095:
case 1112:
case 1578:
case 1828:
case 3246:
case 1857:
case 2485:
case 3224:
case 2847:
case 2699:
case 225:
case 3657:
case 732:
case 3193:
case 1003:
case 1478:
case 2776:
case 2585:
case 3002:
case 3077:
case 3628:
case 3986:
case 3553:
case 3656:
case 2963:
case 1808:
case 1371:
case 3362:
case 1363:
case 3076:
case 2971:
case 2702:
case 3933:
case 675:
case 3987:
case 2542:
case 2332:
case 3204:
case 1789:
case 1552:
case 385:
case 1219:
case 2777:
case 3188:
case 2824:
case 31:
case 264:
case 3:
case 1299:
case 631:
case 854:
case 2442:
case 3022:
case 971:
case 870:
case 1856:
case 1865:
case 4074:
case 1345:
case 1535:
case 660:
case 2355:
case 536:
case 3039:
case 1031:
case 2652:
case 2069:
case 2149:
case 90:
case 1955:
case 3706:
case 3151:
case 1159:
case 2007:
case 1590:
case 2795:
case 3643:
case 761:
case 3760:
case 405:
case 2044:
case 2164:
case 2285:
case 2329:
case 1510:
case 2715:
case 154:
case 3842:
case 3446:
case 1929:
case 3921:
case 1674:
case 170:
case 1490:
case 3727:
case 2848:
case 3503:
case 728:
case 3254:
case 380:
case 930:
case 654:
case 831:
case 2752:
case 670:
case 1577:
case 3186:
case 477:
case 735:
case 3403:
case 839:
case 3384:
case 2273:
case 1239:
case 3658:
case 1860:
case 2489:
case 2312:
case 1477:
case 779:
case 3913:
case 2305:
case 291:
case 2350:
case 1689:
case 1415:
case 2028:
case 3396:
case 1091:
case 3223:
case 2057:
case 969:
case 1950:
case 240:
case 1595:
case 607:
case 1167:
case 1905:
case 961:
case 3019:
case 1011:
case 1276:
case 1968:
case 2280:
case 299:
case 250:
case 763:
case 175:
case 1881:
case 818:
case 1120:
case 624:
case 2622:
case 1439:
case 213:
case 3554:
case 2008:
case 1129:
case 758:
case 3880:
case 304:
case 436:
case 1364:
case 3934:
case 567:
case 2359:
case 3397:
case 4061:
case 3531:
case 1539:
case 3728:
case 402:
case 2949:
case 2799:
case 698:
case 252:
case 3757:
case 1155:
case 3951:
case 2065:
case 1100:
case 3090:
case 3873:
case 3523:
case 1522:
case 382:
case 2480:
case 1872:
case 1476:
case 1869:
case 3861:
case 932:
case 672:
case 162:
case 3672:
case 3607:
case 2854:
case 2163:
case 4080:
case 3423:
case 1422:
case 2171:
case 347:
case 1576:
case 1785:
case 2639:
case 53:
case 3052:
case 3695:
case 2743:
case 3848:
case 1815:
case 976:
case 1753:
case 636:
case 560:
case 1244:
case 2186:
case 518:
case 1581:
case 4003:
case 2254:
case 424:
case 3630:
case 3261:
case 2078:
case 2403:
case 2627:
case 322:
case 3312:
case 2913:
case 3615:
case 602:
case 1648:
case 2384:
case 2396:
case 3677:
case 1137:
case 3735:
case 391:
case 3602:
case 1458:
case 1427:
case 1560:
case 3182:
case 2114:
case 1506:
case 2099:
case 2101:
case 2223:
case 1996:
case 766:
case 3280:
case 3803:
case 1916:
case 2194:
case 1558:
case 1460:
case 684:
case 1877:
case 1802:
case 1406:
case 3368:
case 399:
case 1938:
case 3008:
case 470:
case 1704:
case 3622:
case 1334:
case 1544:
case 2934:
case 83:
case 1407:
case 105:
case 204:
case 2203:
case 2121:
case 1876:
case 1469:
case 1472:
case 3573:
case 444:
case 1136:
case 2341:
case 2531:
case 3823:
case 2728:
case 2397:
case 1444:
case 2090:
case 677:
case 1747:
case 1997:
case 3145:
case 3799:
case 1426:
case 1941:
case 352:
case 2757:
case 3561:
case 1569:
case 4031:
case 1572:
case 2523:
case 407:
case 3831:
case 1839:
case 1206:
case 867:
case 2626:
case 562:
case 2988:
case 1388:
case 13:
case 709:
case 2644:
case 257:
case 2861:
case 282:
case 701:
case 2423:
case 320:
case 2607:
case 3854:
case 2672:
case 96:
case 1631:
case 1975:
case 600:
case 903:
case 2187:
case 788:
case 3580:
case 3171:
case 2248:
case 1162:
case 1042:
case 1249:
case 793:
case 2512:
case 2259:
case 841:
case 643:
case 1668:
case 3850:
case 859:
case 2492:
case 890:
case 1605:
case 2763:
case 1302:
case 4092:
case 974:
case 2225:
case 1377:
case 1650:
case 2389:
case 508:
case 2086:
case 2902:
case 745:
case 2771:
case 3787:
case 2838:
case 695:
case 2592:
case 1185:
case 230:
case 3613:
case 273:
case 3275:
case 3958:
case 2094:
case 1440:
case 686:
case 3496:
case 1729:
case 3892:
case 159:
case 3538:
case 4068:
case 3128:
case 4050:
case 1037:
case 1692:
case 3812:
case 3416:
case 4005:
case 1330:
case 2745:
case 1540:
case 1700:
case 3960:
case 2014:
case 3157:
case 2199:
case 1766:
case 2550:
case 1036:
case 446:
case 2361:
case 3417:
case 1973:
case 2135:
case 3597:
case 2559:
case 1018:
case 2425:
case 3165:
case 3045:
case 3969:
case 1709:
case 3284:
case 3701:
case 1961:
case 1549:
case 3541:
case 3714:
case 2292:
case 2110:
case 3517:
case 1564:
case 4025:
case 821:
case 2875:
case 3497:
case 2459:
case 878:
case 214:
case 1449:
case 1376:
case 3143:
case 3651:
case 3238:
case 2649:
case 3825:
case 2152:
case 1834:
case 3575:
case 610:
case 597:
case 1142:
case 483:
case 1062:
case 2268:
case 892:
case 3634:
case 1625:
case 417:
case 337:
case 2250:
case 1322:
case 987:
case 54:
case 1174:
case 1851:
case 3859:
case 2922:
case 2297:
case 369:
case 1251:
case 1638:
case 181:
case 3178:
case 1493:
case 3492:
case 3896:
case 1616:
case 3389:
case 3225:
case 2868:
case 423:
case 3763:
case 1903:
case 1593:
case 2733:
case 3592:
case 3902:
case 3771:
case 3977:
case 2981:
case 1104:
case 551:
case 2516:
case 2275:
case 683:
case 3915:
case 71:
case 1798:
case 1948:
case 330:
case 410:
case 2613:
case 7:
case 468:
case 549:
case 2721:
case 2496:
case 2892:
case 2348:
case 3405:
case 4016:
case 1684:
case 808:
case 541:
case 3930:
case 1360:
case 3468:
case 1306:
case 889:
case 3199:
case 1009:
case 1191:
case 2906:
case 2438:
case 2693:
case 2082:
case 1288:
case 1718:
case 1067:
case 3995:
case 3745:
case 1124:
case 1783:
case 1307:
case 84:
case 1213:
case 982:
case 1369:
case 3361:
case 4041:
case 2417:
case 412:
case 2714:
case 2972:
case 2701:
case 1146:
case 3373:
case 3425:
case 3212:
case 2045:
case 2165:
case 3559:
case 1551:
case 3782:
case 3190:
case 1000:
case 85:
case 2794:
case 2944:
case 3110:
case 203:
case 1326:
case 1029:
case 1293:
case 4017:
case 2688:
case 2926:
case 2441:
case 314:
case 434:
case 306:
case 453:
case 1534:
case 1344:
case 3525:
case 2497:
case 904:
case 3649:
case 1488:
case 1641:
case 2651:
case 486:
case 3817:
case 2143:
case 2063:
case 3380:
case 2071:
case 3087:
case 2575:
case 1770:
case 2216:
case 521:
case 2825:
case 3205:
case 1588:
case 15:
case 529:
case 2634:
case 2323:
case 3664:
case 1849:
case 3922:
case 3897:
case 1617:
case 2537:
case 2347:
case 2583:
case 1494:
case 449:
case 1670:
case 2686:
case 568:
case 2957:
case 3749:
case 1741:
case 510:
case 2106:
case 4037:
case 697:
case 2040:
case 2160:
case 1797:
case 747:
case 2751:
case 288:
case 3764:
case 2483:
case 2158:
case 3115:
case 1717:
case 2279:
case 1068:
case 1287:
case 490:
case 1233:
case 209:
case 1401:
case 3409:
case 2734:
case 3467:
case 3520:
case 2311:
case 782:
case 441:
case 2304:
case 757:
case 2601:
case 2614:
case 3229:
case 3093:
case 3682:
case 1637:
case 1683:
case 1092:
case 2570:
case 348:
case 2820:
case 1012:
case 3883:
case 2788:
case 2809:
case 2236:
case 716:
case 3013:
case 2867:
case 2621:
case 421:
case 3088:
case 1123:
case 3209:
case 1784:
case 1214:
case 856:
case 1487:
case 1433:
case 2479:
case 2866:
case 2713:
case 2800:
case 2283:
case 1698:
case 1953:
case 727:
case 2793:
case 3342:
case 846:
case 1533:
case 2562:
case 1294:
case 1716:
case 415:
case 335:
case 3910:
case 1863:
case 2908:
case 156:
case 3862:
case 1308:
case 379:
case 1738:
case 689:
case 3034:
case 1025:
case 2418:
case 1924:
case 3935:
case 3671:
case 4018:
case 328:
case 2633:
case 1356:
case 2498:
case 2346:
case 553:
case 883:
case 1131:
case 3139:
case 4036:
case 3555:
case 2172:
case 2049:
case 1796:
case 91:
case 2956:
case 595:
case 2518:
case 3663:
case 3391:
case 4009:
case 301:
case 42:
case 3537:
case 4067:
case 3583:
case 3751:
case 388:
case 2195:
case 2567:
case 3040:
case 3160:
case 2509:
case 938:
case 823:
case 621:
case 2749:
case 2999:
case 1096:
case 3106:
case 3262:
case 629:
case 4020:
case 3734:
case 2467:
case 2520:
case 1319:
case 1263:
case 925:
case 110:
case 309:
case 2232:
case 1038:
case 1667:
case 2229:
case 2093:
case 2682:
case 3614:
case 3601:
case 752:
case 1189:
case 3181:
case 248:
case 2102:
case 3298:
case 1985:
case 1084:
case 1620:
case 868:
case 2266:
case 2883:
case 2200:
case 3218:
case 408:
case 742:
case 692:
case 3470:
case 3694:
case 1378:
case 3809:
case 810:
case 911:
case 2432:
case 2836:
case 497:
case 834:
case 945:
case 366:
case 1712:
case 3800:
case 750:
case 3237:
case 649:
case 3713:
case 45:
case 1471:
case 2122:
case 2898:
case 2342:
case 955:
case 1563:
case 2645:
case 2220:
case 1666:
case 659:
case 740:
case 993:
case 690:
case 3562:
case 1571:
case 2176:
case 1821:
case 4029:
case 1017:
case 1768:
case 3908:
case 3436:
case 3832:
case 153:
case 2034:
case 1445:
case 195:
case 2529:
case 294:
case 279:
case 1833:
case 1887:
case 546:
case 2466:
case 2879:
case 2455:
case 2862:
case 3126:
case 3498:
case 3346:
case 3536:
case 4055:
case 143:
case 1173:
case 2671:
case 3324:
case 2663:
case 1545:
case 1097:
case 2500:
case 1705:
case 3172:
case 1041:
case 1161:
case 3169:
case 886:
case 112:
case 964:
case 2555:
case 1750:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751418002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,];
var gg_b = "1751418002/";

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
