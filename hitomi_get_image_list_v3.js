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
case 1123:
case 1723:
case 3650:
case 933:
case 397:
case 2920:
case 1788:
case 1260:
case 913:
case 1005:
case 1596:
case 1601:
case 2086:
case 707:
case 1510:
case 454:
case 2862:
case 643:
case 2806:
case 2383:
case 4080:
case 1980:
case 2128:
case 2328:
case 3535:
case 3870:
case 947:
case 3811:
case 637:
case 99:
case 886:
case 677:
case 1902:
case 617:
case 463:
case 2226:
case 1966:
case 4002:
case 1026:
case 794:
case 2686:
case 3641:
case 2201:
case 1830:
case 3971:
case 3488:
case 157:
case 2777:
case 160:
case 3996:
case 3045:
case 750:
case 1605:
case 3531:
case 2821:
case 4035:
case 2437:
case 403:
case 193:
case 3216:
case 381:
case 2139:
case 2104:
case 2739:
case 3318:
case 3815:
case 3563:
case 2077:
case 1301:
case 685:
case 1441:
case 3145:
case 1688:
case 963:
case 1332:
case 1132:
case 3750:
case 49:
case 1824:
case 1732:
case 3848:
case 3213:
case 374:
case 22:
case 10:
case 1623:
case 561:
case 413:
case 2683:
case 3958:
case 2884:
case 3018:
case 2004:
case 1204:
case 1472:
case 3401:
case 75:
case 1105:
case 130:
case 2288:
case 2598:
case 2160:
case 2549:
case 1808:
case 4063:
case 2360:
case 1963:
case 110:
case 1305:
case 2386:
case 3279:
case 3341:
case 2909:
case 737:
case 717:
case 777:
case 3141:
case 2786:
case 2186:
case 1228:
case 3244:
case 2968:
case 2604:
case 2490:
case 3237:
case 2416:
case 3172:
case 1726:
case 1869:
case 1326:
case 3372:
case 204:
case 1713:
case 3479:
case 2996:
case 2045:
case 1313:
case 2641:
case 3201:
case 489:
case 2488:
case 867:
case 3177:
case 2423:
case 281:
case 3739:
case 3704:
case 2118:
case 2502:
case 3104:
case 1892:
case 3339:
case 2815:
case 2531:
case 1956:
case 3821:
case 885:
case 4056:
case 2290:
case 3437:
case 2672:
case 572:
case 512:
case 1241:
case 3086:
case 2041:
case 3862:
case 3413:
case 24:
case 427:
case 3920:
case 2975:
case 2811:
case 1439:
case 1404:
case 1272:
case 2072:
case 3383:
case 253:
case 1744:
case 1137:
case 1144:
case 1337:
case 1344:
case 3783:
case 3556:
case 3825:
case 3677:
case 877:
case 2341:
case 3386:
case 3947:
case 837:
case 2741:
case 2401:
case 3288:
case 3160:
case 3598:
case 85:
case 3507:
case 562:
case 3574:
case 3857:
case 2372:
case 3083:
case 3639:
case 2244:
case 3604:
case 3490:
case 2618:
case 989:
case 1037:
case 3803:
case 2745:
case 2145:
case 2899:
case 4053:
case 2350:
case 2150:
case 1013:
case 4049:
case 2563:
case 1907:
case 1949:
case 528:
case 559:
case 1644:
case 4074:
case 2426:
case 1716:
case 1116:
case 502:
case 1190:
case 1568:
case 2867:
case 927:
case 688:
case 904:
case 1894:
case 3702:
case 2539:
case 2504:
case 600:
case 3166:
case 3331:
case 2674:
case 143:
case 583:
case 3268:
case 2873:
case 3442:
case 2937:
case 1658:
case 1435:
case 710:
case 981:
case 3247:
case 3209:
case 2649:
case 3234:
case 3063:
case 3923:
case 1375:
case 177:
case 1175:
case 744:
case 551:
case 4018:
case 1402:
case 94:
case 2756:
case 997:
case 333:
case 2583:
case 2156:
case 3135:
case 2293:
case 1431:
case 1342:
case 964:
case 1742:
case 1480:
case 1142:
case 3335:
case 2356:
case 313:
case 67:
case 693:
case 2913:
case 39:
case 1396:
case 474:
case 434:
case 2053:
case 70:
case 1771:
case 1588:
case 2098:
case 1171:
case 347:
case 1207:
case 1249:
case 2007:
case 1523:
case 2374:
case 545:
case 3631:
case 793:
case 1758:
case 3680:
case 2774:
case 303:
case 3666:
case 2916:
case 2990:
case 2468:
case 1042:
case 1193:
case 3035:
case 1945:
case 2753:
case 4045:
case 2447:
case 2434:
case 3932:
case 2353:
case 73:
case 1463:
case 2707:
case 824:
case 2398:
case 2149:
case 2107:
case 71:
case 289:
case 1505:
case 3926:
case 1851:
case 363:
case 1642:
case 934:
case 3002:
case 914:
case 3882:
case 3635:
case 3493:
case 3031:
case 3800:
case 644:
case 354:
case 788:
case 3550:
case 2876:
case 1532:
case 44:
case 1941:
case 3545:
case 700:
case 1696:
case 3363:
case 2275:
case 1075:
case 1610:
case 2135:
case 3583:
case 3293:
case 2735:
case 1537:
case 2335:
case 213:
case 3074:
case 4004:
case 1668:
case 1939:
case 2475:
case 982:
case 3049:
case 80:
case 1647:
case 247:
case 4077:
case 1634:
case 1609:
case 29:
case 2663:
case 42:
case 3944:
case 2180:
case 2780:
case 2731:
case 2366:
case 525:
case 2829:
case 3539:
case 2063:
case 3577:
case 2923:
case 1263:
case 844:
case 2471:
case 1120:
case 2988:
case 1720:
case 3653:
case 2496:
case 3698:
case 1009:
case 86:
case 870:
case 2209:
case 2234:
case 3979:
case 1513:
case 1865:
case 2493:
case 1368:
case 2800:
case 482:
case 1768:
case 1168:
case 1516:
case 263:
case 2926:
case 2066:
case 1202:
case 579:
case 4060:
case 2363:
case 1020:
case 3275:
case 2220:
case 1407:
case 327:
case 1449:
case 420:
case 539:
case 290:
case 254:
case 1822:
case 1734:
case 2550:
case 1709:
case 1747:
case 4086:
case 1309:
case 1334:
case 1347:
case 1453:
case 2666:
case 3916:
case 123:
case 3242:
case 3468:
case 2035:
case 3056:
case 1861:
case 3374:
case 2631:
case 3174:
case 3895:
case 3149:
case 3107:
case 3749:
case 3398:
case 860:
case 3198:
case 3349:
case 3271:
case 3307:
case 3753:
case 2541:
case 3296:
case 3153:
case 3586:
case 3210:
case 3409:
case 857:
case 3353:
case 1021:
case 3565:
case 1961:
case 3759:
case 725:
case 3403:
case 356:
case 3143:
case 321:
case 2551:
case 639:
case 883:
case 1384:
case 1184:
case 3092:
case 752:
case 619:
case 1625:
case 2801:
case 399:
case 3252:
case 2030:
case 1230:
case 2081:
case 1281:
case 1576:
case 268:
case 222:
case 1703:
case 2:
case 2467:
case 406:
case 851:
case 3692:
case 4065:
case 3561:
case 1965:
case 3270:
case 1303:
case 255:
case 3484:
case 1157:
case 2169:
case 826:
case 3536:
case 2085:
case 1595:
case 280:
case 3714:
case 3114:
case 2512:
case 1860:
case 2805:
case 128:
case 1886:
case 1922:
case 2448:
case 3976:
case 4022:
case 2681:
case 1125:
case 1883:
case 669:
case 1725:
case 845:
case 3837:
case 2203:
case 1917:
case 1269:
case 1057:
case 218:
case 1297:
case 2888:
case 2452:
case 449:
case 3954:
case 2008:
case 2624:
case 3533:
case 238:
case 524:
case 1162:
case 1762:
case 966:
case 1362:
case 4089:
case 1321:
case 342:
case 1573:
case 2938:
case 2669:
case 3267:
case 3919:
case 1121:
case 3425:
case 1721:
case 746:
case 609:
case 2411:
case 3792:
case 2594:
case 3192:
case 2284:
case 1839:
case 3392:
case 1804:
case 3517:
case 3043:
case 1603:
case 1877:
case 3146:
case 2781:
case 4033:
case 2330:
case 2130:
case 3987:
case 992:
case 1554:
case 906:
case 3346:
case 3299:
case 2697:
case 3614:
case 2608:
case 3462:
case 3248:
case 2964:
case 1224:
case 719:
case 3406:
case 1011:
case 726:
case 3369:
case 2484:
case 3769:
case 1951:
case 1872:
case 161:
case 3:
case 2692:
case 465:
case 3225:
case 1070:
case 1615:
case 3630:
case 1652:
case 975:
case 3448:
case 915:
case 3681:
case 798:
case 3206:
case 380:
case 2991:
case 3512:
case 3397:
case 3197:
case 3797:
case 869:
case 2314:
case 1955:
case 221:
case 3551:
case 491:
case 1469:
case 852:
case 2457:
case 2092:
case 1582:
case 1292:
case 4040:
case 2215:
case 195:
case 3221:
case 2159:
case 825:
case 1767:
case 1167:
case 2403:
case 2816:
case 3685:
case 544:
case 1148:
case 3724:
case 1850:
case 3124:
case 3832:
case 809:
case 1348:
case 368:
case 299:
case 429:
case 2046:
case 1246:
case 1115:
case 2192:
case 475:
case 2517:
case 435:
case 1818:
case 1243:
case 3669:
case 2267:
case 2059:
case 987:
case 2425:
case 3470:
case 819:
case 1099:
case 2299:
case 2589:
case 1048:
case 2614:
case 3024:
case 2248:
case 2146:
case 3781:
case 2746:
case 500:
case 3181:
case 3330:
case 1352:
case 1152:
case 1752:
case 588:
case 1311:
case 1667:
case 2659:
case 3415:
case 4094:
case 1711:
case 1770:
case 958:
case 3527:
case 3203:
case 560:
case 57:
case 626:
case 1564:
case 991:
case 318:
case 3452:
case 3097:
case 1430:
case 3008:
case 3624:
case 2014:
case 1214:
case 4078:
case 3185:
case 338:
case 651:
case 3823:
case 1481:
case 2678:
case 3476:
case 2948:
case 3264:
case 1422:
case 2999:
case 848:
case 179:
case 119:
case 3689:
case 2287:
case 1898:
case 2508:
case 3514:
case 2112:
case 1195:
case 3491:
case 1795:
case 2755:
case 2340:
case 1673:
case 4043:
case 2740:
case 1557:
case 2140:
case 2482:
case 275:
case 2355:
case 3336:
case 215:
case 3161:
case 831:
case 2694:
case 1227:
case 871:
case 3238:
case 3617:
case 2967:
case 146:
case 3322:
case 921:
case 1687:
case 3089:
case 1176:
case 2524:
case 3847:
case 1776:
case 3809:
case 3495:
case 4014:
case 1914:
case 2254:
case 772:
case 712:
case 659:
case 1294:
case 3229:
case 2627:
case 732:
case 2151:
case 3543:
case 523:
case 3365:
case 3903:
case 376:
case 2273:
case 3559:
case 3165:
case 1461:
case 728:
case 3906:
case 1695:
case 672:
case 1076:
case 3389:
case 3022:
case 3962:
case 2378:
case 1154:
case 2875:
case 2530:
case 3487:
case 1754:
case 287:
case 1091:
case 1433:
case 2291:
case 3717:
case 3592:
case 3282:
case 2794:
case 3317:
case 3661:
case 702:
case 1521:
case 2970:
case 2438:
case 3419:
case 1773:
case 1173:
case 392:
case 3636:
case 2655:
case 2810:
case 1562:
case 1691:
case 1095:
case 1946:
case 2585:
case 3133:
case 2295:
case 1387:
case 4046:
case 1676:
case 499:
case 3333:
case 2915:
case 125:
case 3665:
case 4092:
case 2429:
case 421:
case 3036:
case 2055:
case 152:
case 801:
case 2727:
case 3473:
case 2127:
case 2327:
case 895:
case 3061:
case 550:
case 1863:
case 4008:
case 2495:
case 1412:
case 1908:
case 438:
case 418:
case 478:
case 1997:
case 249:
case 2089:
case 1289:
case 1599:
case 3524:
case 2834:
case 2722:
case 276:
case 216:
case 2868:
case 1100:
case 2559:
case 1700:
case 236:
case 2765:
case 145:
case 3351:
case 1440:
case 832:
case 1969:
case 1638:
case 1029:
case 1382:
case 2229:
case 2017:
case 3627:
case 3151:
case 9:
case 922:
case 3597:
case 507:
case 3712:
case 3508:
case 601:
case 3678:
case 748:
case 4024:
case 1064:
case 48:
case 2264:
case 711:
case 3694:
case 2238:
case 3027:
case 2617:
case 3219:
case 2361:
case 3755:
case 335:
case 3740:
case 2336:
case 315:
case 3585:
case 2133:
case 3295:
case 1981:
case 1478:
case 517:
case 4081:
case 3871:
case 784:
case 468:
case 1364:
case 1764:
case 543:
case 795:
case 3127:
case 1138:
case 938:
case 1682:
case 1570:
case 1835:
case 701:
case 648:
case 3915:
case 1511:
case 1600:
case 1236:
case 391:
case 2036:
case 3378:
case 198:
case 3875:
case 3530:
case 2487:
case 408:
case 387:
case 4085:
case 3778:
case 3291:
case 3178:
case 2546:
case 2022:
case 1222:
case 828:
case 2789:
case 859:
case 2925:
case 365:
case 3640:
case 2419:
case 3655:
case 4:
case 151:
case 1866:
case 3051:
case 3394:
case 1802:
case 1129:
case 2117:
case 455:
case 2592:
case 98:
case 3194:
case 2282:
case 1329:
case 761:
case 3911:
case 1515:
case 1237:
case 3228:
case 443:
case 3283:
case 3593:
case 950:
case 994:
case 3558:
case 0:
case 1772:
case 1172:
case 3869:
case 2814:
case 3305:
case 3963:
case 3023:
case 417:
case 663:
case 3705:
case 1401:
case 3088:
case 1741:
case 568:
case 1279:
case 3450:
case 1432:
case 985:
case 45:
case 522:
case 2116:
case 5:
case 2190:
case 2790:
case 2218:
case 2637:
case 3204:
case 3239:
case 2644:
case 733:
case 1426:
case 2974:
case 713:
case 508:
case 1405:
case 2679:
case 140:
case 580:
case 1563:
case 2907:
case 1150:
case 3732:
case 2547:
case 3824:
case 2509:
case 2013:
case 2486:
case 1145:
case 134:
case 1899:
case 3688:
case 1290:
case 1216:
case 69:
case 1672:
case 4042:
case 3626:
case 917:
case 2956:
case 2483:
case 1531:
case 485:
case 95:
case 541:
case 1502:
case 450:
case 2846:
case 538:
case 1423:
case 1488:
case 1852:
case 1971:
case 889:
case 3605:
case 2245:
case 1045:
case 2313:
case 104:
case 613:
case 31:
case 360:
case 224:
case 2337:
case 763:
case 1535:
case 3542:
case 2144:
case 3980:
case 2137:
case 3902:
case 2690:
case 2404:
case 2616:
case 1072:
case 1811:
case 3188:
case 3260:
case 1975:
case 388:
case 1645:
case 3005:
case 754:
case 300:
case 3123:
case 164:
case 827:
case 3601:
case 2379:
case 3596:
case 3510:
case 1628:
case 873:
case 3637:
case 3843:
case 1683:
case 1884:
case 3859:
case 3316:
case 3116:
case 3568:
case 3547:
case 2824:
case 2132:
case 2732:
case 3013:
case 3998:
case 2101:
case 1077:
case 2277:
case 3949:
case 3907:
case 2558:
case 2126:
case 3044:
case 3037:
case 1639:
case 1416:
case 1803:
case 4068:
case 1786:
case 2445:
case 1553:
case 1386:
case 4047:
case 244:
case 1677:
case 1909:
case 1934:
case 1947:
case 2450:
case 1507:
case 1549:
case 230:
case 1160:
case 2418:
case 2026:
case 3616:
case 3272:
case 3344:
case 3337:
case 1825:
case 1183:
case 1556:
case 1783:
case 3144:
case 486:
case 3737:
case 1862:
case 890:
case 2596:
case 2601:
case 3379:
case 727:
case 2788:
case 1920:
case 2188:
case 2260:
case 288:
case 4020:
case 2323:
case 3477:
case 2123:
case 120:
case 200:
case 2723:
case 2388:
case 854:
case 1304:
case 1339:
case 1104:
case 1704:
case 1444:
case 423:
case 3428:
case 293:
case 2935:
case 1821:
case 3483:
case 23:
case 1479:
case 260:
case 3250:
case 2032:
case 257:
case 1177:
case 3846:
case 1377:
case 1201:
case 797:
case 2347:
case 2309:
case 1545:
case 2453:
case 2986:
case 154:
case 2147:
case 2134:
case 820:
case 2747:
case 2734:
case 1550:
case 2709:
case 2449:
case 2407:
case 400:
case 1763:
case 3501:
case 1905:
case 1363:
case 3075:
case 488:
case 2498:
case 2960:
case 1220:
case 575:
case 2266:
case 2474:
case 1066:
case 1926:
case 1002:
case 4026:
case 2768:
case 2590:
case 2168:
case 2280:
case 2516:
case 286:
case 2865:
case 2231:
case 2368:
case 1800:
case 367:
case 4032:
case 394:
case 1541:
case 3945:
case 3675:
case 3010:
case 3071:
case 4001:
case 3505:
case 704:
case 457:
case 350:
case 1680:
case 640:
case 3526:
case 3855:
case 1631:
case 944:
case 3758:
case 3793:
case 2235:
case 3256:
case 781:
case 3193:
case 223:
case 1666:
case 614:
case 3042:
case 930:
case 3710:
case 3196:
case 3253:
case 2579:
case 1663:
case 19:
case 3310:
case 3249:
case 2609:
case 147:
case 2647:
case 681:
case 3523:
case 2977:
case 3171:
case 1475:
case 3771:
case 3918:
case 2904:
case 3402:
case 2668:
case 3827:
case 2544:
case 2537:
case 3480:
case 3742:
case 988:
case 113:
case 565:
case 900:
case 2047:
case 2009:
case 1209:
case 2513:
case 35:
case 2120:
case 337:
case 3775:
case 993:
case 430:
case 558:
case 529:
case 1923:
case 3878:
case 377:
case 410:
case 2320:
case 1102:
case 1829:
case 697:
case 1766:
case 1166:
case 960:
case 97:
case 3894:
case 1380:
case 3658:
case 2983:
case 1131:
case 1331:
case 64:
case 1268:
case 1780:
case 2928:
case 1307:
case 1271:
case 1198:
case 2071:
case 1560:
case 549:
case 2505:
case 250:
case 1707:
case 1398:
case 2812:
case 1749:
case 1107:
case 2950:
case 267:
case 294:
case 1353:
case 1586:
case 1153:
case 1296:
case 2096:
case 1753:
case 2675:
case 3620:
case 3235:
case 2193:
case 3861:
case 576:
case 1916:
case 516:
case 881:
case 4016:
case 1990:
case 2042:
case 1774:
case 1174:
case 1374:
case 285:
case 2758:
case 2840:
case 2158:
case 207:
case 3449:
case 127:
case 1891:
case 2696:
case 2501:
case 1275:
case 2075:
case 2610:
case 3498:
case 3347:
case 2671:
case 3334:
case 3453:
case 897:
case 1876:
case 864:
case 3734:
case 3709:
case 3134:
case 2532:
case 3516:
case 3231:
case 3865:
case 1656:
case 782:
case 2851:
case 3266:
case 2972:
case 3474:
case 3202:
case 853:
case 2775:
case 237:
case 3263:
case 217:
case 2375:
case 1649:
case 3047:
case 3034:
case 3889:
case 2658:
case 3456:
case 3068:
case 1937:
case 3817:
case 1504:
case 2894:
case 924:
case 2249:
case 3634:
case 3609:
case 874:
case 2207:
case 814:
case 3833:
case 2523:
case 3977:
case 2771:
case 1887:
case 2110:
case 2710:
case 2796:
case 2196:
case 2396:
case 840:
case 2310:
case 1819:
case 1528:
case 2480:
case 3537:
case 1356:
case 592:
case 1293:
case 2431:
case 1258:
case 2466:
case 3904:
case 2402:
case 3554:
case 479:
case 2752:
case 1987:
case 1346:
case 520:
case 2485:
case 666:
case 2352:
case 1614:
case 1406:
case 1813:
case 2099:
case 1589:
case 1299:
case 815:
case 875:
case 3721:
case 142:
case 3321:
case 1267:
case 1919:
case 2529:
case 3839:
case 1392:
case 3603:
case 2315:
case 211:
case 1043:
case 231:
case 2115:
case 2715:
case 1792:
case 3208:
case 2978:
case 2481:
case 1533:
case 3297:
case 3587:
case 3989:
case 3306:
case 3106:
case 1879:
case 3762:
case 2564:
case 2538:
case 3828:
case 909:
case 1837:
case 1973:
case 1844:
case 2370:
case 3325:
case 4073:
case 1643:
case 3003:
case 3883:
case 332:
case 3125:
case 1659:
case 2111:
case 776:
case 2711:
case 716:
case 736:
case 2667:
case 3917:
case 1314:
case 3860:
case 1991:
case 3595:
case 2424:
case 3922:
case 616:
case 3006:
case 676:
case 3886:
case 636:
case 2841:
case 3459:
case 3303:
case 1270:
case 3965:
case 2070:
case 2615:
case 396:
case 3703:
case 261:
case 979:
case 919:
case 3443:
case 3621:
case 2011:
case 1211:
case 706:
case 3157:
case 3757:
case 1484:
case 2408:
case 3414:
case 2912:
case 3591:
case 3606:
case 1252:
case 2799:
case 284:
case 2850:
case 2148:
case 1522:
case 2748:
case 452:
case 1359:
case 2167:
case 1816:
case 3961:
case 2611:
case 1565:
case 3021:
case 2367:
case 805:
case 1759:
case 2500:
case 3784:
case 2292:
case 425:
case 2940:
case 3184:
case 2015:
case 295:
case 1743:
case 2362:
case 849:
case 2306:
case 665:
case 504:
case 2208:
case 1823:
case 138:
case 3978:
case 1785:
case 1385:
case 2297:
case 3430:
case 3699:
case 1097:
case 2492:
case 3111:
case 1415:
case 3311:
case 141:
case 581:
case 816:
case 1069:
case 876:
case 2269:
case 2519:
case 272:
case 1203:
case 3370:
case 2883:
case 3170:
case 2725:
case 2684:
case 1608:
case 1964:
case 1024:
case 3048:
case 54:
case 4064:
case 1697:
case 3752:
case 1130:
case 2554:
case 3152:
case 1730:
case 1381:
case 691:
case 2933:
case 564:
case 1578:
case 1781:
case 597:
case 3352:
case 3529:
case 3818:
case 2839:
case 2804:
case 311:
case 3243:
case 658:
case 331:
case 3115:
case 1411:
case 629:
case 1284:
case 1594:
case 3259:
case 2657:
case 4038:
case 2321:
case 2573:
case 1669:
case 3199:
case 1324:
case 168:
case 758:
case 384:
case 1832:
case 945:
case 3748:
case 1124:
case 3850:
case 3148:
case 1724:
case 2576:
case 3408:
case 2662:
case 2414:
case 3912:
case 2606:
case 2281:
case 2591:
case 1801:
case 675:
case 1030:
case 2230:
case 3940:
case 3292:
case 2184:
case 3582:
case 2784:
case 395:
case 3015:
case 262:
case 1551:
case 3955:
case 3469:
case 2384:
case 3167:
case 866:
case 3767:
case 2021:
case 1221:
case 791:
case 2922:
case 2062:
case 1448:
case 1681:
case 3841:
case 2886:
case 534:
case 3652:
case 1630:
case 1797:
case 498:
case 1197:
case 259:
case 1085:
case 2595:
case 1108:
case 1169:
case 2357:
case 806:
case 892:
case 2443:
case 1555:
case 1826:
case 155:
case 2621:
case 2757:
case 3070:
case 1225:
case 2303:
case 4000:
case 2103:
case 2703:
case 426:
case 462:
case 3417:
case 1036:
case 756:
case 2511:
case 1665:
case 2600:
case 2682:
case 1921:
case 3856:
case 3525:
case 1061:
case 2570:
case 283:
case 1473:
case 3489:
case 2364:
case 3187:
case 2930:
case 912:
case 3787:
case 309:
case 2981:
case 1133:
case 2478:
case 3946:
case 932:
case 3387:
case 1317:
case 2515:
case 1661:
case 251:
case 3251:
case 8:
case 2802:
case 2729:
case 496:
case 192:
case 106:
case 1925:
case 2831:
case 2000:
case 4025:
case 1189:
case 3695:
case 880:
case 1962:
case 1022:
case 3354:
case 3433:
case 2985:
case 1546:
case 298:
case 1820:
case 459:
case 3154:
case 428:
case 3619:
case 2029:
case 2382:
case 1543:
case 4057:
case 3294:
case 2440:
case 2782:
case 2100:
case 432:
case 1559:
case 1165:
case 1903:
case 116:
case 3073:
case 4003:
case 1122:
case 1722:
case 3176:
case 2548:
case 818:
case 3376:
case 962:
case 1322:
case 2997:
case 149:
case 3391:
case 3278:
case 3791:
case 1495:
case 2908:
case 1984:
case 742:
case 1336:
case 1736:
case 3874:
case 1136:
case 2451:
case 3673:
case 1617:
case 928:
case 3227:
case 3503:
case 346:
case 1361:
case 2924:
case 1264:
case 3849:
case 3807:
case 88:
case 1033:
case 621:
case 3195:
case 339:
case 319:
case 3898:
case 1438:
case 2173:
case 3880:
case 513:
case 3265:
case 533:
case 165:
case 3831:
case 1640:
case 3000:
case 3329:
case 1911:
case 1051:
case 3866:
case 638:
case 3129:
case 187:
case 2354:
case 2091:
case 1178:
case 398:
case 1378:
case 3552:
case 1530:
case 2754:
case 1875:
case 971:
case 911:
case 3222:
case 1464:
case 1276:
case 1612:
case 1327:
case 3338:
case 2319:
case 2856:
case 3570:
case 2525:
case 2119:
case 1727:
case 2719:
case 1842:
case 1127:
case 2417:
case 1055:
case 2255:
case 3236:
case 3511:
case 495:
case 2240:
case 3494:
case 1040:
case 4015:
case 2787:
case 1871:
case 3930:
case 4052:
case 3478:
case 3981:
case 1295:
case 1585:
case 1012:
case 2212:
case 484:
case 3164:
case 1810:
case 899:
case 2489:
case 2019:
case 3629:
case 1967:
case 2465:
case 2959:
case 1694:
case 1482:
case 431:
case 175:
case 1355:
case 115:
case 563:
case 3451:
case 1340:
case 1569:
case 471:
case 1112:
case 1712:
case 3233:
case 2195:
case 78:
case 219:
case 2395:
case 1287:
case 961:
case 1312:
case 2087:
case 2654:
case 2853:
case 3700:
case 741:
case 503:
case 3300:
case 3567:
case 2619:
case 3217:
case 3969:
case 3638:
case 680:
case 3455:
case 1351:
case 3782:
case 2294:
case 3440:
case 2054:
case 3997:
case 2391:
case 655:
case 2278:
case 3908:
case 3412:
case 2914:
case 2176:
case 3548:
case 6:
case 1524:
case 738:
case 2687:
case 3289:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754856001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,];
var gg_b = "1754856001/";

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
