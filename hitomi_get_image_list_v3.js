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
case 3623:
case 3763:
case 1413:
case 3149:
case 2787:
case 3203:
case 1651:
case 2942:
case 360:
case 1990:
case 1135:
case 3382:
case 1358:
case 2684:
case 2277:
case 3351:
case 219:
case 1323:
case 1682:
case 3658:
case 548:
case 317:
case 3563:
case 3912:
case 1025:
case 1150:
case 3770:
case 3629:
case 787:
case 175:
case 3143:
case 3209:
case 1742:
case 1077:
case 2175:
case 2450:
case 1237:
case 3617:
case 3261:
case 1464:
case 3714:
case 733:
case 4005:
case 601:
case 3280:
case 2544:
case 3701:
case 1508:
case 3916:
case 2858:
case 911:
case 2744:
case 2823:
case 1329:
case 2435:
case 3514:
case 1166:
case 2113:
case 3884:
case 441:
case 1542:
case 2647:
case 280:
case 721:
case 982:
case 3570:
case 2209:
case 444:
case 2769:
case 75:
case 1963:
case 2770:
case 2916:
case 1097:
case 851:
case 2280:
case 1347:
case 2930:
case 2714:
case 914:
case 2261:
case 789:
case 604:
case 3435:
case 3590:
case 113:
case 1851:
case 639:
case 3462:
case 2570:
case 2386:
case 380:
case 2569:
case 4029:
case 3647:
case 1449:
case 2884:
case 3113:
case 3942:
case 663:
case 2297:
case 4058:
case 2203:
case 1061:
case 1970:
case 710:
case 2623:
case 1969:
case 920:
case 1716:
case 3466:
case 3684:
case 1901:
case 222:
case 1914:
case 962:
case 976:
case 1530:
case 1495:
case 525:
case 3829:
case 319:
case 400:
case 3164:
case 3817:
case 1516:
case 3908:
case 3127:
case 3068:
case 2563:
case 4023:
case 3587:
case 496:
case 1755:
case 1776:
case 1084:
case 3368:
case 2532:
case 585:
case 1407:
case 3229:
case 1974:
case 1493:
case 3680:
case 314:
case 1936:
case 1753:
case 2565:
case 1188:
case 430:
case 4025:
case 1528:
case 3521:
case 2625:
case 2972:
case 3181:
case 2765:
case 3179:
case 2082:
case 2803:
case 86:
case 2897:
case 3160:
case 1309:
case 2247:
case 761:
case 1361:
case 282:
case 2199:
case 980:
case 1380:
case 3877:
case 1251:
case 3697:
case 2976:
case 995:
case 3825:
case 2774:
case 1499:
case 609:
case 2284:
case 3996:
case 1759:
case 320:
case 634:
case 475:
case 2928:
case 3594:
case 1772:
case 3173:
case 356:
case 1397:
case 2488:
case 784:
case 1303:
case 729:
case 1932:
case 590:
case 2861:
case 2880:
case 449:
case 3156:
case 2107:
case 2433:
case 2223:
case 698:
case 2825:
case 88:
case 607:
case 712:
case 1029:
case 3934:
case 3710:
case 1460:
case 3677:
case 276:
case 960:
case 2115:
case 3953:
case 262:
case 3536:
case 2740:
case 1837:
case 1452:
case 402:
case 2173:
case 3809:
case 256:
case 3510:
case 144:
case 3107:
case 778:
case 4003:
case 1139:
case 1377:
case 3880:
case 845:
case 3574:
case 1792:
case 3861:
case 2439:
case 1325:
case 100:
case 3532:
case 2229:
case 2609:
case 2721:
case 1023:
case 2152:
case 2661:
case 3051:
case 3959:
case 2160:
case 1940:
case 4080:
case 2337:
case 1058:
case 1415:
case 2181:
case 3972:
case 3625:
case 4009:
case 1133:
case 3346:
case 3723:
case 3663:
case 2034:
case 759:
case 3558:
case 699:
case 9:
case 1751:
case 3844:
case 1122:
case 2210:
case 370:
case 1491:
case 78:
case 2355:
case 2784:
case 2138:
case 2426:
case 905:
case 326:
case 615:
case 63:
case 3240:
case 425:
case 500:
case 1363:
case 2869:
case 3498:
case 1272:
case 878:
case 1551:
case 3758:
case 827:
case 1782:
case 3183:
case 779:
case 3890:
case 1947:
case 4087:
case 2028:
case 3670:
case 3729:
case 3669:
case 165:
case 1178:
case 1467:
case 864:
case 1234:
case 2312:
case 3221:
case 1855:
case 3601:
case 1984:
case 4044:
case 1253:
case 1608:
case 2705:
case 3342:
case 2191:
case 3100:
case 1369:
case 3092:
case 335:
case 1228:
case 2863:
case 1586:
case 2265:
case 3887:
case 3517:
case 2982:
case 1816:
case 3171:
case 2422:
case 3189:
case 2232:
case 1314:
case 3951:
case 2717:
case 1483:
case 106:
case 1923:
case 2669:
case 1846:
case 2729:
case 2601:
case 1198:
case 2221:
case 190:
case 3312:
case 3863:
case 4014:
case 2342:
case 3644:
case 3705:
case 4069:
case 1612:
case 3232:
case 4070:
case 3422:
case 3982:
case 2517:
case 541:
case 2096:
case 2844:
case 673:
case 3053:
case 1808:
case 1929:
case 3687:
case 3034:
case 2346:
case 1021:
case 3076:
case 3355:
case 14:
case 3784:
case 3138:
case 1616:
case 697:
case 3986:
case 1630:
case 966:
case 2294:
case 2498:
case 250:
case 918:
case 185:
case 777:
case 952:
case 1387:
case 3124:
case 4063:
case 793:
case 3478:
case 2523:
case 3330:
case 3167:
case 3814:
case 884:
case 2183:
case 1655:
case 3801:
case 3316:
case 653:
case 492:
case 3709:
case 889:
case 3270:
case 125:
case 3328:
case 3269:
case 4032:
case 2448:
case 1977:
case 788:
case 85:
case 1404:
case 3761:
case 1634:
case 1087:
case 3214:
case 2290:
case 2525:
case 3621:
case 2725:
case 3874:
case 3418:
case 2665:
case 1208:
case 3120:
case 1106:
case 3580:
case 1321:
case 2632:
case 3334:
case 3353:
case 2402:
case 3509:
case 1340:
case 3703:
case 3797:
case 1090:
case 1102:
case 372:
case 366:
case 1659:
case 810:
case 2777:
case 3694:
case 2610:
case 205:
case 3141:
case 3457:
case 2406:
case 2968:
case 2104:
case 4010:
case 1246:
case 1672:
case 1148:
case 547:
case 318:
case 4036:
case 3640:
case 4074:
case 2821:
case 136:
case 3359:
case 3597:
case 867:
case 2008:
case 2865:
case 1014:
case 3:
case 2372:
case 2703:
case 1420:
case 3406:
case 2832:
case 1230:
case 2141:
case 1069:
case 926:
case 3610:
case 3777:
case 1118:
case 272:
case 2640:
case 3111:
case 218:
case 950:
case 3577:
case 1374:
case 575:
case 2012:
case 3008:
case 2503:
case 1336:
case 1255:
case 2597:
case 768:
case 1310:
case 3821:
case 1692:
case 490:
case 1872:
case 485:
case 3840:
case 2016:
case 774:
case 2709:
case 1997:
case 148:
case 3525:
case 3185:
case 530:
case 3290:
case 1332:
case 2761:
case 192:
case 60:
case 3448:
case 1696:
case 821:
case 2580:
case 1441:
case 3244:
case 2055:
case 2561:
case 4021:
case 2874:
case 3725:
case 3396:
case 44:
case 754:
case 3402:
case 2836:
case 694:
case 3632:
case 174:
case 3153:
case 3134:
case 2440:
case 792:
case 1306:
case 3278:
case 748:
case 618:
case 2848:
case 2385:
case 2754:
case 666:
case 1271:
case 855:
case 3993:
case 3474:
case 1031:
case 3818:
case 2733:
case 3436:
case 1781:
case 2083:
case 12:
case 1552:
case 3945:
case 457:
case 1200:
case 3128:
case 246:
case 3410:
case 1760:
case 2657:
case 1573:
case 116:
case 294:
case 3465:
case 1715:
case 2952:
case 1641:
case 3857:
case 3432:
case 2806:
case 1556:
case 2311:
case 3602:
case 1348:
case 46:
case 2192:
case 2000:
case 1283:
case 1885:
case 1756:
case 1933:
case 3091:
case 1496:
case 2089:
case 3648:
case 3172:
case 2981:
case 1302:
case 533:
case 2979:
case 1773:
case 2960:
case 2421:
case 168:
case 686:
case 4048:
case 1988:
case 1238:
case 394:
case 2159:
case 1174:
case 57:
case 2602:
case 1820:
case 3311:
case 1793:
case 3739:
case 2091:
case 2999:
case 1707:
case 1026:
case 4002:
case 3192:
case 3421:
case 3960:
case 3979:
case 1611:
case 1604:
case 291:
case 3089:
case 2172:
case 2648:
case 1685:
case 3440:
case 2134:
case 2788:
case 3298:
case 1472:
case 4006:
case 3196:
case 3915:
case 445:
case 802:
case 3554:
case 479:
case 188:
case 2176:
case 2278:
case 93:
case 1599:
case 2320:
case 3533:
case 2818:
case 605:
case 2024:
case 459:
case 3754:
case 2606:
case 6:
case 1291:
case 813:
case 2410:
case 3973:
case 3494:
case 48:
case 346:
case 171:
case 2128:
case 2945:
case 2226:
case 2367:
case 994:
case 3383:
case 2130:
case 4031:
case 2218:
case 157:
case 561:
case 3085:
case 1749:
case 3202:
case 3550:
case 2826:
case 3622:
case 1891:
case 454:
case 2324:
case 635:
case 3762:
case 74:
case 2338:
case 2020:
case 2155:
case 90:
case 1057:
case 474:
case 3898:
case 3750:
case 832:
case 3490:
case 2631:
case 128:
case 1322:
case 253:
case 1867:
case 706:
case 2698:
case 584:
case 1743:
case 529:
case 790:
case 1326:
case 1170:
case 33:
case 468:
case 2391:
case 3678:
case 1824:
case 2463:
case 1838:
case 3487:
case 2112:
case 297:
case 3927:
case 626:
case 946:
case 2822:
case 1430:
case 1378:
case 3108:
case 2257:
case 3964:
case 3206:
case 399:
case 3766:
case 16:
case 1600:
case 273:
case 2371:
case 3698:
case 1190:
case 1285:
case 2566:
case 1002:
case 896:
case 2389:
case 353:
case 527:
case 765:
case 1775:
case 3391:
case 2142:
case 1513:
case 3949:
case 215:
case 2927:
case 2011:
case 2487:
case 4078:
case 3463:
case 1398:
case 2766:
case 581:
case 299:
case 2108:
case 1144:
case 3822:
case 1638:
case 2735:
case 1564:
case 3995:
case 1889:
case 159:
case 2383:
case 2975:
case 3324:
case 938:
case 1527:
case 3943:
case 2202:
case 2085:
case 1727:
case 564:
case 145:
case 3469:
case 2562:
case 3155:
case 1204:
case 179:
case 2248:
case 2146:
case 1624:
case 3878:
case 488:
case 2535:
case 1764:
case 3414:
case 3631:
case 844:
case 1520:
case 3506:
case 545:
case 1807:
case 1893:
case 700:
case 467:
case 1109:
case 796:
case 3360:
case 1243:
case 4054:
case 3381:
case 2403:
case 2654:
case 309:
case 3352:
case 559:
case 2497:
case 676:
case 3064:
case 2633:
case 334:
case 207:
case 1681:
case 3168:
case 223:
case 3477:
case 298:
case 3019:
case 963:
case 1679:
case 1720:
case 3706:
case 158:
case 3425:
case 2393:
case 2718:
case 3854:
case 3985:
case 1197:
case 3373:
case 2095:
case 4039:
case 1249:
case 3702:
case 181:
case 2409:
case 45:
case 103:
case 744:
case 3502:
case 127:
case 1656:
case 3315:
case 2639:
case 1541:
case 2480:
case 2461:
case 99:
case 1673:
case 2548:
case 2985:
case 682:
case 2833:
case 1511:
case 937:
case 2235:
case 1177:
case 2425:
case 3345:
case 421:
case 2702:
case 1881:
case 1879:
case 3095:
case 741:
case 901:
case 1607:
case 184:
case 1437:
case 1852:
case 2250:
case 3409:
case 885:
case 732:
case 1906:
case 3518:
case 3920:
case 1711:
case 433:
case 129:
case 1645:
case 3941:
case 2839:
case 3557:
case 1856:
case 1333:
case 1062:
case 3399:
case 593:
case 331:
case 806:
case 2360:
case 1035:
case 2379:
case 3633:
case 1699:
case 234:
case 1815:
case 2064:
case 1213:
case 3497:
case 3403:
case 3757:
case 2019:
case 398:
case 2027:
case 1948:
case 2477:
case 1050:
case 2904:
case 307:
case 2168:
case 342:
case 337:
case 2327:
case 1998:
case 2531:
case 3635:
case 1215:
case 571:
case 2866:
case 2052:
case 1123:
case 2079:
case 3182:
case 2429:
case 464:
case 2971:
case 2239:
case 836:
case 301:
case 3650:
case 2417:
case 167:
case 2081:
case 3099:
case 1033:
case 588:
case 1362:
case 3991:
case 2900:
case 3349:
case 1054:
case 2850:
case 427:
case 403:
case 3186:
case 2313:
case 702:
case 1695:
case 1589:
case 1643:
case 189:
case 2458:
case 1129:
case 2015:
case 1864:
case 478:
case 825:
case 1571:
case 1771:
case 3578:
case 458:
case 2233:
case 2254:
case 3045:
case 3093:
case 2375:
case 2598:
case 1260:
case 240:
case 942:
case 1931:
case 2056:
case 2862:
case 17:
case 3726:
case 263:
case 3343:
case 3798:
case 848:
case 2186:
case 3850:
case 2526:
case 1675:
case 2778:
case 1922:
case 3015:
case 619:
case 3458:
case 1482:
case 2045:
case 1147:
case 1451:
case 934:
case 1299:
case 1613:
case 516:
case 2395:
case 2578:
case 3423:
case 755:
case 121:
case 2666:
case 2484:
case 3862:
case 695:
case 3319:
case 1524:
case 680:
case 3327:
case 2405:
case 237:
case 304:
case 2662:
case 3364:
case 2447:
case 1978:
case 52:
case 3052:
case 1567:
case 3417:
case 2650:
case 3989:
case 1627:
case 1293:
case 3239:
case 4062:
case 3079:
case 2182:
case 3429:
case 1207:
case 39:
case 169:
case 3900:
case 730:
case 4035:
case 1724:
case 3731:
case 1664:
case 1486:
case 2099:
case 3873:
case 989:
case 2243:
case 49:
case 2845:
case 131:
case 4079:
case 2295:
case 2807:
case 95:
case 4060:
case 2520:
case 3333:
case 3856:
case 2918:
case 3785:
case 4081:
case 1941:
case 4052:
case 439:
case 3948:
case 2681:
case 107:
case 142:
case 1757:
case 198:
case 404:
case 1497:
case 2388:
case 1403:
case 1654:
case 1633:
case 3815:
case 3699:
case 3213:
case 762:
case 3879:
case 776:
case 2197:
case 720:
case 2249:
case 3881:
case 3511:
case 4073:
case 1307:
case 3468:
case 1718:
case 3177:
case 258:
case 3339:
case 910:
case 2741:
case 3704:
case 2541:
case 600:
case 2673:
case 3906:
case 3264:
case 1518:
case 1461:
case 227:
case 3852:
case 3066:
case 3437:
case 1888:
case 696:
case 1409:
case 3219:
case 756:
case 3607:
case 2656:
case 3249:
case 573:
case 381:
case 4007:
case 2860:
case 3197:
case 3103:
case 2879:
case 1262:
case 4045:
case 1548:
case 597:
case 3741:
case 2339:
case 1075:
case 2177:
case 2468:
case 508:
case 2511:
case 3899:
case 3615:
case 3957:
case 2264:
case 1013:
case 850:
case 3673:
case 378:
case 2645:
case 3541:
case 1748:
case 229:
case 2704:
case 3656:
case 2607:
case 2693:
case 2227:
case 303:
case 2437:
case 2852:
case 1381:
case 2035:
case 933:
case 2873:
case 2275:
case 3652:
case 401:
case 3161:
case 1688:
case 2785:
case 2333:
case 2856:
case 3918:
case 2062:
case 364:
case 3660:
case 1019:
case 1911:
case 81:
case 2585:
case 1168:
case 1904:
case 2050:
case 1027:
case 1477:
case 1064:
case 3388:
case 711:
case 641:
case 760:
case 2123:
case 442:
case 2583:
case 3088:
case 1866:
case 2649:
case 423:
case 3567:
case 104:
case 498:
case 722:
case 743:
case 613:
case 912:
case 3184:
case 3738:
case 1531:
case 2813:
case 3524:
case 2998:
case 3724:
case 2273:
case 1731:
case 3486:
case 3538:
case 2054:
case 19:
case 369:
case 978:
case 1060:
case 1239:
case 903:
case 3895:
case 3619:
case 1971:
case 2158:
case 2335:
case 2256:
case 3767:
case 1081:
case 2783:
case 3627:
case 4049:
case 2129:
case 289:
case 2589:
case 333:
case 2643:
case 2571:
case 3922:
case 964:
case 387:
case 25:
case 2252:
case 1850:
case 2500:
case 2827:
case 1313:
case 2931:
case 3105:
case 1862:
case 140:
case 3791:
case 1598:
case 2260:
case 2039:
case 163:
case 2700:
case 3849:
case 3299:
case 1835:
case 886:
case 2789:
case 3451:
case 1254:
case 4043:
case 3117:
case 3864:
case 1778:
case 2675:
case 4013:
case 389:
case 3366:
case 2591:
case 3827:
case 50:
case 1526:
case 1288:
case 35:
case 3252:
case 3281:
case 2849:
case 1484:
case 1726:
case 1343:
case 3260:
case 1093:
case 961:
case 3039:
case 1924:
case 2791:
case 2105:
case 3789:
case 1045:
case 594:
case 2613:
case 4075:
case 1722:
case 1447:
case 2978:
case 1151:
case 1662:
case 2567:
case 3649:
case 4027:
case 183:
case 3123:
case 4064:
case 434:
case 655:
case 2524:
case 3998:
case 1635:
case 3215:
case 2184:
case 2738:
case 137:
case 795:
case 310:
case 2926:
case 2843:
case 818:
case 269:
case 852:
case 3054:
case 1099:
case 3362:
case 3273:
case 3875:
case 649:
case 3783:
case 984:
case 367:
case 3158:
case 3335:
case 1182:
case 2207:
case 2619:
case 1522:
case 2492:
case 3357:
case 3599:
case 1848:
case 1298:
case 2560:
case 4020:
case 1196:
case 1915:
case 3685:
case 1440:
case 2581:
case 3459:
case 3165:
case 583:
case 2552:
case 2781:
case 254:
case 96:
case 1973:
case 3841:
case 537:
case 3132:
case 1754:
case 3799:
case 1956:
case 2031:
case 2939:
case 2271:
case 1806:
case 3820:
case 766:
case 895:
case 3593:
case 2098:
case 3174:
case 2348:
case 473:
case 3238:
case 3136:
case 194:
case 2573:
case 3428:
case 2641:
case 3110:
case 1952:
case 4041:
case 1981:
case 1089:
case 2496:
case 928:
case 993:
case 1071:
case 268:
case 1960:
case 1231:
case 2515:
case 3611:
case 2885:
case 3267:
case 2954:
case 2283:
case 692:
case 10:
case 1000:
case 3793:
case 648:
case 718:
case 1739:
case 2933:
case 2756:
case 499:
case 3348:
case 705:
case 138:
case 540:
case 1432:
case 98:
case 2820:
case 3556:
case 2988:
case 2110:
case 3194:
case 3641:
case 2545:
case 4011:
case 2136:
case 3515:
case 2434:
case 2611:
case 2224:
case 625:
case 368:
case 43:
case 2745:
case 1648:
case 415:
case 2604:
case 2453:
case 817:
case 2707:
case 1341:
case 2026:
case 2476:
case 945:
case 3283:
case 3885:
case 59:
case 636:
case 251:
case 1134:
case 3581:
case 374:
case 3560:
case 1410:
case 786:
case 2291:
case 1606:
case 354:
case 3781:
case 2165:
case 1588:
case 32:
case 4085:
case 3200:
case 539:
case 2459:
case 271:
case 3271:
case 1024:
case 3939:
case 1474:
case 3031:
case 1907:
case 3527:
case 770:
case 3800:
case 38:
case 2163:
case 3331:
case 3519:
case 3638:
case 1218:
case 3871:
case 534:
case 1878:
case 1414:
case 3764:
case 1631:
case 3211:
case 3204:
case 3966:
case 379:
case 1401:
case 690:
case 345:
case 2057:
case 1338:
case 1020:
case 3006:
case 3667:
case 2549:
case 1949:
case 2743:
case 2326:
case 3775:
case 2824:
case 4071:
case 3513:
case 3962:
case 2114:
case 3190:
case 3285:
case 2867:
case 3883:
case 153:
case 40:
case 1698:
case 3446:
case 2795:
case 92:
case 1257:
case 811:
case 2378:
case 1822:
case 3144:
case 173:
case 2416:
case 26:
case 2838:
case 3713:
case 108:
case 2671:
case 3575:
case 2543:
case 1112:
case 64:
case 3018:
case 1831:
case 3824:
case 1142:
case 115:
case 3169:
case 1300:
case 3326:
case 491:
case 4091:
case 2935:
case 3795:
case 1566:
case 2883:
case 814:
case 3114:
case 2190:
case 3867:
case 1626:
case 971:
case 2144:
case 3430:
case 3595:
case 1108:
case 438:
case 1206:
case 1004:
case 3543:
case 3689:
case 1919:
case 2398:
case 2713:
case 1011:
case 3838:
case 1622:
case 2519:
case 1762:
case 3163:
case 28:
case 1202:
case 1550:
case 507:
case 820:
case 2564:
case 2638:
case 4024:
case 2408:
case 862:
case 259:
case 2889:
case 3241:
case 856:
case 393:
case 1248:
case 279:
case 531:
case 2966:
case 4038:
case 665:
case 2624:
case 3322:
case 2442:
case 2667:
case 1898:
case 3630:
case 2259:
case 1076:
case 3616:
case 1034:
case 1687:
case 3929:
case 3471:
case 2122:
case 3489:
case 3917:
case 2582:
case 3808:
case 2551:
case 936:
case 2947:
case 1478:
case 3292:
case 1028:
case 1814:
case 2065:
case 3131:
case 1124:
case 2272:
case 2363:
case 390:
case 715:
case 2424:
case 2074:
case 1312:
case 2984:
case 2855:
case 1505:
case 3198:
case 4008:
case 3296:
case 3923:
case 1547:
case 3094:
case 3846:
case 265:
case 2036:
case 556:
case 679:
case 3344:
case 2276:
case 2642:
case 1059:
case 306:
case 1982:
case 2301:
case 659:
case 3958:
case 3612:
case 3390:
case 799:
case 1747:
case 1072:
case 1644:
case 1705:
case 68:
case 2608:
case 1863:
case 2586:
case 898:
case 4:
case 1601:
case 3855:
case 3253:
case 677:
case 3234:
case 992:
case 1614:
case 3424:
case 1221:
case 290:
case 693:
case 3642:
case 452:
case 2344:
case 2483:
case 1717:
case 1308:
case 1670:
case 2846:
case 365:
case 4012:
case 2923:
case 3010:
case 628:
case 2094:
case 753:
case 1189:
case 3830:
case 2390:
case 1529:
case 1517:
case 1171:
case 3126:
case 1100:
case 3369:
case 1092:
case 135:
case 3228:
case 3438:
case 797:
case 657:
case 3608:
case 708:
case 2616:
case 2400:
case 582:
case 126:
case 3491:
case 2630:
case 3812:
case 1558:
case 2917:
case 2489:
case 3122:
case 1844:
case 4055:
case 1096:
case 2021:
case 511:
case 2929:
case 1183:
case 1523:
case 2292:
case 3551:
case 3363:
case 285:
case 1498:
case 3272:
case 2842:
case 3905:
case 2653:
case 1448:
case 2977:
case 3696:
case 1525:
case 348:
case 2892:
case 1290:
case 4028:
case 2411:
case 1840:
case 2737:
case 3903:
case 2242:
case 3872:
case 225:
case 3365:
case 560:
case 2321:
case 186:
case 3859:
case 2537:
case 543:
case 4076:
case 2628:
case 840:
case 4034:
case 1725:
case 863:
case 4053:
case 2106:
case 3157:
case 1042:
case 3980:
case 738:
case 3216:
case 3118:
case 3420:
case 1406:
case 3070:
case 3961:
case 105:
case 1392:
case 3230:
case 3069:
case 671:
case 839:
case 1937:
case 3014:
case 2090:
case 1674:
case 2394:
case 1821:
case 3310:
case 3692:
case 3834:
case 2044:
case 651:
case 2925:
case 1104:
case 2485:
case 3876:
case 1694:
case 2230:
case 2069:
case 1832:
case 94:
case 1457:
case 2961:
case 2420:
case 2070:
case 2118:
case 172:
case 2216:
case 2980:
case 166:
case 3659:
case 2828:
case 41:
case 3090:
case 1263:
case 654:
case 4092:
case 3102:
case 1865:
case 3340:
case 62:
case 2001:
case 1797:
case 336:
case 3896:
case 2853:
case 2336:
case 2692:
case 3394:
case 2310:
case 1640:
case 152:
case 3485:
case 1012:
case 70:
case 2374:
case 3246:
case 3672:
case 1761:
case 3087:
case 3568:
case 990:
case 1780:
case 3977:
case 450:
case 1328:
case 906:
case 519:
case 668:
case 2997:
case 1709:
case 3242:
case 3676:
case 3737:
case 1836:
case 1353:
case 426:
case 1509:
case 470:
case 2157:
case 1120:
case 1055:
case 1376:
case 3628:
case 1561:
case 3914:
case 894:
case 941:
case 3009:
case 482:
case 1037:
case 1466:
case 411:
case 1787:
case 3970:
case 737:
case 3080:
case 1942:
case 2162:
case 687:
case 3384:
case 4051:
case 2150:
case 230:
case 1164:
case 1908:
case 3495:
case 701:
case 119:
case 3347:
case 1790:
case 3003:
case 3882:
case 2508:
case 275:
case 2987:
case 3512:
case 302:
case 518:
case 2237:
case 1450:
case 552:
case 2542:
case 3449:
case 1462:
case 180:
case 1647:
case 1435:
case 2268:
case 1823:
case 1225:
case 313:
case 1195:
case 1701:
case 3508:
case 2882:
case 2003:
case 1916:
case 3686:
case 3464:
case 2347:
case 1930:
case 1209:
case 900:
case 456:
case 247:
case 202:
case 1770:
case 3987:
case 1769:
case 2449:
case 1884:
case 462:
case 610:
case 740:
case 3542:
case 213:
case 5:
case 1514:
case 3708:
case 1501:
case 3135:
case 2901:
case 2716:
case 2009:
case 1847:
case 2730:
case 3546:
case 3990:
case 2914:
case 1203:
case 1805:
case 67:
case 3162:
case 2555:
case 2080:
case 838:
case 2969:
case 2970:
case 1763:
case 2061:
case 1149:
case 624:
case 117:
case 1912:
case 79:
case 1563:
case 3475:
case 3150:
case 414:
case 0:
case 2384:
case 65:
case 2755:
case 1658:
case 2530:
case 3944:
case 891:
case 2516:
case 1351:
case 944:
case 1051:
case 2936:
case 396:
case 1959:
case 2445:
case 3796:
case 3473:
case 3994:
case 2528:
case 2910:
case 3023:
case 2286:
case 2188:
case 629:
case 2084:
case 2637:
case 2974:
case 550:
case 1532:
case 2407:
case 3456:
case 570:
case 1247:
case 2380:
case 955:
case 1199:
case 3133:
case 182:
case 526:
case 2668:
case 1972:
case 1625:
case 3596:
case 873:
case 1897:
case 3940:
case 1205:
case 3058:
case 1803:
case 2759:
case 241:
case 1953:
case 3017:
case 3479:
case 3029:
case 3921:
case 3460:
case 1710:
case 1976:
case 535:
case 3592:
case 1574:
case 2282:
case 1107:
case 2005:
case 3377:
case 1510:
case 2047:
case 2772:
case 1145:
case 1536:
case 2303:
case 1488:
case 3452:
case 1809:
case 2460:
case 1794:
case 120:
case 2921:
case 162:
case 1540:
case 1115:
case 341:
case 176:
case 1825:
case 1433:
case 1454:
case 3251:
case 1697:
case 2139:
case 1156:
case 664:
case 3932:
case 3397:
case 3303:
case 244:
case 3047:
case 3734:
case 3188:
case 1661:
case 1152:
case 3286:
case 731:
case 2023:
case 1721:
case 2796:
case 114:
case 3936:
case 3753:
case 947:
case 1368:
case 3407:
case 1229:
case 200:
case 3974:
case 815:
case 3776:
case 3084:
case 3576:
case 3380:
case 723:
case 707:
case 742:
case 612:
case 1337:
case 681:
case 2596:
case 3668:
case 3534:
case 2415:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748005201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,];
var gg_b = "1748005201/";

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
