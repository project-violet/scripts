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
case 3681:
case 1312:
case 3986:
case 1542:
case 3430:
case 3942:
case 3737:
case 2400:
case 1013:
case 301:
case 1694:
case 3648:
case 937:
case 87:
case 426:
case 2876:
case 2178:
case 2790:
case 2472:
case 792:
case 3058:
case 1277:
case 3772:
case 3627:
case 2718:
case 3579:
case 2620:
case 2585:
case 1979:
case 3985:
case 3005:
case 1585:
case 1620:
case 3604:
case 2979:
case 3251:
case 721:
case 3270:
case 598:
case 2035:
case 2634:
case 1876:
case 1178:
case 3619:
case 1472:
case 2277:
case 266:
case 1400:
case 2013:
case 653:
case 2095:
case 2453:
case 1036:
case 3889:
case 2694:
case 1730:
case 3202:
case 3449:
case 2312:
case 964:
case 2586:
case 2724:
case 175:
case 2232:
case 3109:
case 2328:
case 908:
case 990:
case 3263:
case 1140:
case 3774:
case 126:
case 2139:
case 3825:
case 2508:
case 637:
case 3510:
case 3761:
case 2199:
case 2843:
case 536:
case 2220:
case 757:
case 3859:
case 2483:
case 3227:
case 2868:
case 2347:
case 178:
case 1722:
case 3365:
case 912:
case 51:
case 1529:
case 1998:
case 3944:
case 32:
case 1234:
case 1314:
case 4095:
case 466:
case 3929:
case 3598:
case 2677:
case 2722:
case 3219:
case 1556:
case 2234:
case 605:
case 3956:
case 3651:
case 2692:
case 1199:
case 3204:
case 384:
case 959:
case 1220:
case 2309:
case 1483:
case 3128:
case 3422:
case 1166:
case 1139:
case 3908:
case 3088:
case 2632:
case 1508:
case 2165:
case 3366:
case 4069:
case 788:
case 2294:
case 2555:
case 3399:
case 744:
case 1760:
case 1511:
case 1099:
case 795:
case 3616:
case 3911:
case 656:
case 615:
case 3657:
case 1467:
case 1745:
case 447:
case 1603:
case 360:
case 2650:
case 3047:
case 3575:
case 2746:
case 272:
case 1975:
case 2040:
case 2589:
case 1423:
case 3188:
case 2664:
case 1039:
case 736:
case 3446:
case 269:
case 2065:
case 69:
case 1280:
case 2423:
case 1664:
case 2039:
case 3615:
case 423:
case 3693:
case 827:
case 1065:
case 2280:
case 3989:
case 3009:
case 172:
case 918:
case 1040:
case 2754:
case 902:
case 3576:
case 2467:
case 2603:
case 1976:
case 1671:
case 544:
case 2388:
case 1650:
case 3460:
case 2099:
case 3885:
case 3221:
case 429:
case 3633:
case 2250:
case 2135:
case 510:
case 2271:
case 1196:
case 3844:
case 1203:
case 1169:
case 2662:
case 3105:
case 1559:
case 1491:
case 223:
case 231:
case 2968:
case 254:
case 1680:
case 1525:
case 229:
case 3369:
case 585:
case 3396:
case 2773:
case 1701:
case 2113:
case 3473:
case 147:
case 2195:
case 1838:
case 3855:
case 834:
case 1305:
case 1113:
case 3401:
case 521:
case 2838:
case 1195:
case 700:
case 798:
case 533:
case 2305:
case 3106:
case 3808:
case 3293:
case 2431:
case 463:
case 3335:
case 3687:
case 618:
case 602:
case 4065:
case 2559:
case 3233:
case 394:
case 3621:
case 3543:
case 3926:
case 2810:
case 3313:
case 2898:
case 1135:
case 1271:
case 2203:
case 3791:
case 1306:
case 3856:
case 3158:
case 1630:
case 1481:
case 276:
case 750:
case 1841:
case 2624:
case 346:
case 165:
case 732:
case 1888:
case 974:
case 2649:
case 1142:
case 1448:
case 1720:
case 104:
case 2185:
case 3068:
case 652:
case 1026:
case 2059:
case 3434:
case 14:
case 630:
case 228:
case 2404:
case 786:
case 37:
case 2690:
case 2427:
case 1222:
case 1578:
case 128:
case 3697:
case 86:
case 1404:
case 3978:
case 204:
case 2026:
case 24:
case 4011:
case 2186:
case 265:
case 2888:
case 1649:
case 1025:
case 2607:
case 538:
case 2481:
case 3637:
case 613:
case 2841:
case 3274:
case 3763:
case 1914:
case 2402:
case 2249:
case 2108:
case 2806:
case 3329:
case 125:
case 2224:
case 3344:
case 1089:
case 1540:
case 2947:
case 3509:
case 3702:
case 3940:
case 596:
case 3896:
case 3770:
case 1144:
case 771:
case 3751:
case 2777:
case 268:
case 2858:
case 2156:
case 1129:
case 2622:
case 1290:
case 952:
case 3869:
case 930:
case 2566:
case 1218:
case 884:
case 3355:
case 717:
case 2470:
case 848:
case 2928:
case 606:
case 1566:
case 583:
case 3999:
case 3528:
case 1117:
case 3272:
case 3661:
case 1451:
case 1792:
case 3966:
case 2338:
case 1599:
case 3835:
case 476:
case 3297:
case 3308:
case 168:
case 1156:
case 3674:
case 2909:
case 3895:
case 2089:
case 2310:
case 2230:
case 3075:
case 2565:
case 1402:
case 589:
case 3939:
case 1108:
case 913:
case 225:
case 3200:
case 507:
case 2398:
case 1539:
case 2703:
case 1750:
case 63:
case 1812:
case 2433:
case 1375:
case 1457:
case 616:
case 3667:
case 173:
case 1284:
case 3733:
case 909:
case 3403:
case 2376:
case 179:
case 3793:
case 1988:
case 517:
case 1764:
case 1273:
case 3588:
case 327:
case 735:
case 162:
case 2189:
case 1682:
case 2654:
case 571:
case 3541:
case 2493:
case 2055:
case 75:
case 3175:
case 1646:
case 2415:
case 262:
case 3038:
case 1055:
case 349:
case 2646:
case 279:
case 842:
case 2988:
case 1201:
case 2764:
case 414:
case 3716:
case 2457:
case 2284:
case 4042:
case 789:
case 2017:
case 1660:
case 4086:
case 3010:
case 3471:
case 1044:
case 2771:
case 2812:
case 2056:
case 1433:
case 3757:
case 3878:
case 1645:
case 2416:
case 860:
case 214:
case 3721:
case 894:
case 93:
case 532:
case 4008:
case 1159:
case 2126:
case 2828:
case 3996:
case 916:
case 2958:
case 609:
case 550:
case 3480:
case 2847:
case 2368:
case 811:
case 4056:
case 3223:
case 2343:
case 3840:
case 2513:
case 586:
case 367:
case 1673:
case 2086:
case 2780:
case 2814:
case 658:
case 2673:
case 1906:
case 3839:
case 599:
case 1086:
case 2246:
case 3995:
case 2809:
case 191:
case 3913:
case 1847:
case 1368:
case 351:
case 1254:
case 1487:
case 222:
case 3558:
case 2569:
case 2596:
case 1535:
case 114:
case 2905:
case 2085:
case 3143:
case 1260:
case 3168:
case 3866:
case 3462:
case 1126:
case 1828:
case 458:
case 2530:
case 896:
case 2240:
case 3537:
case 4003:
case 3500:
case 255:
case 3949:
case 1319:
case 1080:
case 1900:
case 1742:
case 914:
case 3924:
case 1972:
case 3860:
case 3104:
case 1299:
case 548:
case 2348:
case 3572:
case 2134:
case 835:
case 3845:
case 2381:
case 3119:
case 991:
case 85:
case 1134:
case 3612:
case 52:
case 2997:
case 1479:
case 3918:
case 1363:
case 336:
case 2972:
case 2266:
case 662:
case 1518:
case 3394:
case 409:
case 1867:
case 3214:
case 3553:
case 807:
case 1265:
case 2319:
case 2080:
case 1507:
case 3334:
case 1953:
case 1194:
case 3209:
case 3846:
case 640:
case 673:
case 116:
case 1823:
case 4071:
case 760:
case 1240:
case 3163:
case 3930:
case 2708:
case 794:
case 2064:
case 2132:
case 2438:
case 2640:
case 614:
case 3170:
case 1744:
case 1003:
case 398:
case 300:
case 711:
case 3151:
case 2177:
case 2891:
case 1278:
case 1302:
case 3016:
case 2717:
case 3456:
case 2192:
case 3561:
case 2961:
case 622:
case 3429:
case 3033:
case 3884:
case 2699:
case 455:
case 2744:
case 2003:
case 1050:
case 416:
case 1177:
case 3212:
case 2729:
case 962:
case 2522:
case 258:
case 3392:
case 3015:
case 3377:
case 1708:
case 1665:
case 3093:
case 3455:
case 1064:
case 1132:
case 3873:
case 838:
case 2103:
case 2296:
case 3364:
case 1315:
case 2269:
case 339:
case 113:
case 676:
case 1092:
case 1711:
case 2967:
case 119:
case 3849:
case 577:
case 1800:
case 1032:
case 1164:
case 3350:
case 628:
case 3489:
case 321:
case 2236:
case 1295:
case 968:
case 1213:
case 1333:
case 3954:
case 886:
case 333:
case 4034:
case 2554:
case 1789:
case 2837:
case 1582:
case 152:
case 2213:
case 1546:
case 1923:
case 392:
case 1316:
case 3002:
case 3982:
case 385:
case 2800:
case 2032:
case 474:
case 3116:
case 3818:
case 213:
case 925:
case 893:
case 3205:
case 2560:
case 2711:
case 745:
case 2171:
case 3051:
case 2150:
case 310:
case 1269:
case 3776:
case 3890:
case 3121:
case 274:
case 3027:
case 681:
case 2584:
case 1759:
case 2726:
case 3426:
case 2669:
case 1034:
case 976:
case 1883:
case 3658:
case 3822:
case 2991:
case 344:
case 3048:
case 1094:
case 1613:
case 2636:
case 3063:
case 2931:
case 3187:
case 668:
case 784:
case 3606:
case 817:
case 3901:
case 748:
case 2501:
case 1573:
case 3288:
case 357:
case 1180:
case 3973:
case 904:
case 197:
case 2725:
case 3425:
case 206:
case 1636:
case 2321:
case 2874:
case 1669:
case 3459:
case 3591:
case 3380:
case 2387:
case 174:
case 1020:
case 3743:
case 3004:
case 3768:
case 1584:
case 965:
case 2107:
case 1815:
case 389:
case 895:
case 2686:
case 3864:
case 215:
case 1073:
case 923:
case 663:
case 770:
case 2948:
case 3031:
case 2130:
case 418:
case 882:
case 1372:
case 2594:
case 2255:
case 1919:
case 669:
case 81:
case 3850:
case 2353:
case 4082:
case 3324:
case 3871:
case 4046:
case 3091:
case 2857:
case 2190:
case 3519:
case 2229:
case 749:
case 3349:
case 672:
case 2412:
case 836:
case 2816:
case 3920:
case 2052:
case 929:
case 1685:
case 1520:
case 3679:
case 2833:
case 1118:
case 1052:
case 3330:
case 2337:
case 727:
case 2919:
case 2300:
case 335:
case 1353:
case 1244:
case 19:
case 3934:
case 1857:
case 1778:
case 1190:
case 35:
case 3563:
case 3548:
case 1594:
case 1255:
case 2893:
case 1107:
case 2124:
case 2397:
case 1001:
case 115:
case 4060:
case 631:
case 3502:
case 1046:
case 1082:
case 1902:
case 2414:
case 1361:
case 2054:
case 2286:
case 963:
case 2739:
case 1887:
case 1383:
case 2409:
case 1608:
case 338:
case 1447:
case 4084:
case 3322:
case 1765:
case 3161:
case 969:
case 2060:
case 1374:
case 1821:
case 1617:
case 118:
case 972:
case 2629:
case 57:
case 1428:
case 3862:
case 3183:
case 2577:
case 2644:
case 734:
case 629:
case 218:
case 2122:
case 2951:
case 898:
case 2970:
case 456:
case 3977:
case 2285:
case 415:
case 1592:
case 1766:
case 1286:
case 546:
case 2887:
case 1532:
case 4052:
case 1409:
case 2608:
case 3932:
case 2765:
case 3465:
case 1655:
case 2082:
case 2902:
case 2740:
case 480:
case 1054:
case 1804:
case 1933:
case 1160:
case 2916:
case 2611:
case 1226:
case 4007:
case 3268:
case 153:
case 2827:
case 28:
case 675:
case 810:
case 2957:
case 1571:
case 4090:
case 212:
case 3741:
case 2863:
case 2182:
case 2488:
case 1915:
case 2441:
case 2225:
case 885:
case 159:
case 2993:
case 567:
case 2915:
case 2564:
case 1225:
case 1881:
case 821:
case 1367:
case 1863:
case 2689:
case 1182:
case 1488:
case 2819:
case 3557:
case 3834:
case 3903:
case 2145:
case 1957:
case 2550:
case 839:
case 2804:
case 2933:
case 1323:
case 3061:
case 332:
case 4024:
case 224:
case 3382:
case 3346:
case 3167:
case 1827:
case 3516:
case 3301:
case 1851:
case 570:
case 237:
case 1090:
case 1562:
case 543:
case 459:
case 3705:
case 3668:
case 2184:
case 1458:
case 1152:
case 975:
case 1921:
case 1626:
case 164:
case 3435:
case 3643:
case 453:
case 1007:
case 2024:
case 424:
case 3495:
case 105:
case 3413:
case 2713:
case 2795:
case 1736:
case 1802:
case 1030:
case 3352:
case 549:
case 1713:
case 1795:
case 2030:
case 48:
case 3131:
case 3275:
case 4022:
case 2987:
case 1625:
case 1391:
case 1024:
case 317:
case 678:
case 3436:
case 3832:
case 3000:
case 1173:
case 2101:
case 2458:
case 264:
case 3892:
case 2851:
case 2796:
case 412:
case 888:
case 2090:
case 2769:
case 966:
case 2562:
case 3758:
case 1836:
case 3089:
case 2674:
case 2237:
case 3540:
case 556:
case 2813:
case 1509:
case 2317:
case 2075:
case 3230:
case 910:
case 3565:
case 3914:
case 1329:
case 2939:
case 4068:
case 2200:
case 325:
case 4043:
case 3398:
case 3218:
case 1477:
case 2999:
case 2661:
case 3338:
case 1770:
case 1198:
case 1492:
case 2308:
case 1076:
case 2683:
case 878:
case 1297:
case 3622:
case 3156:
case 3858:
case 368:
case 2076:
case 1683:
case 2869:
case 2477:
case 661:
case 1966:
case 1661:
case 2110:
case 3599:
case 3928:
case 705:
case 3011:
case 3470:
case 3402:
case 3806:
case 3249:
case 644:
case 1356:
case 2965:
case 60:
case 3732:
case 3539:
case 2836:
case 1674:
case 1237:
case 3947:
case 1813:
case 2509:
case 1075:
case 47:
case 1547:
case 2702:
case 3463:
case 3888:
case 365:
case 146:
case 3142:
case 2781:
case 610:
case 4076:
case 2748:
case 790:
case 3481:
case 3379:
case 2274:
case 3841:
case 1512:
case 2283:
case 1342:
case 3427:
case 1386:
case 3912:
case 3720:
case 2727:
case 2672:
case 34:
case 2704:
case 633:
case 2043:
case 621:
case 1727:
case 2179:
case 2068:
case 3059:
case 759:
case 4075:
case 518:
case 3734:
case 3578:
case 3222:
case 2719:
case 1697:
case 944:
case 376:
case 502:
case 1763:
case 1274:
case 3624:
case 1600:
case 246:
case 639:
case 724:
case 3649:
case 3762:
case 508:
case 3596:
case 1721:
case 2143:
case 823:
case 3085:
case 3905:
case 3684:
case 2866:
case 831:
case 854:
case 3159:
case 1787:
case 2839:
case 829:
case 3673:
case 1865:
case 936:
case 2506:
case 3125:
case 2326:
case 3809:
case 1936:
case 3246:
case 1480:
case 251:
case 1223:
case 3282:
case 1840:
case 234:
case 391:
case 2631:
case 1995:
case 2936:
case 2359:
case 3368:
case 2480:
case 3343:
case 3254:
case 3595:
case 470:
case 151:
case 267:
case 4010:
case 3086:
case 2865:
case 3042:
case 1506:
case 314:
case 1143:
case 1899:
case 3828:
case 1462:
case 2691:
case 1558:
case 2996:
case 1935:
case 702:
case 373:
case 1667:
case 2716:
case 1733:
case 3284:
case 1403:
case 3111:
case 2389:
case 2010:
case 695:
case 537:
case 756:
case 3056:
case 3812:
case 3416:
case 2176:
case 2878:
case 2038:
case 3682:
case 1311:
case 79:
case 636:
case 3646:
case 249:
case 1231:
case 3941:
case 379:
case 3008:
case 3764:
case 3273:
case 2715:
case 3376:
case 4079:
case 3201:
case 3189:
case 2311:
case 2623:
case 3654:
case 998:
case 900:
case 149:
case 2175:
case 1098:
case 3044:
case 170:
case 451:
case 3029:
case 3645:
case 2291:
case 143:
case 2667:
case 2733:
case 3660:
case 2403:
case 1389:
case 1471:
case 774:
case 555:
case 2088:
case 1114:
case 932:
case 3165:
case 4058:
case 2147:
case 950:
case 3555:
case 3294:
case 2602:
case 1248:
case 3938:
case 46:
case 516:
case 2041:
case 1263:
case 1538:
case 1955:
case 2219:
case 3677:
case 986:
case 3998:
case 3529:
case 401:
case 1598:
case 1929:
case 2956:
case 2339:
case 445:
case 2204:
case 2917:
case 3692:
case 1510:
case 284:
case 2128:
case 1227:
case 1204:
case 1917:
case 2761:
case 3220:
case 1826:
case 1128:
case 3517:
case 3868:
case 3347:
case 148:
case 2227:
case 1422:
case 2783:
case 3556:
case 1956:
case 1339:
case 1147:
case 3328:
case 2109:
case 1041:
case 2263:
case 2774:
case 2538:
case 1399:
case 1088:
case 3139:
case 3474:
case 2114:
case 4005:
case 993:
case 145:
case 876:
case 632:
case 2449:
case 1681:
case 3724:
case 2753:
case 3586:
case 3232:
case 1942:
case 587:
case 1627:
case 2985:
case 1772:
case 917:
case 1490:
case 3979:
case 2251:
case 828:
case 2270:
case 752:
case 1418:
case 16:
case 3277:
case 2619:
case 2797:
case 1251:
case 4041:
case 1270:
case 3876:
case 3069:
case 3472:
case 558:
case 2627:
case 719:
case 2772:
case 3585:
case 84:
case 448:
case 2681:
case 1378:
case 3707:
case 1753:
case 484:
case 2942:
case 2700:
case 245:
case 3400:
case 2737:
case 2663:
case 3036:
case 1889:
case 2407:
case 1449:
case 3559:
case 814:
case 1105:
case 2568:
case 3491:
case 2543:
case 2621:
case 1336:
case 1257:
case 3169:
case 1829:
case 2158:
case 4047:
case 460:
case 2401:
case 3838:
case 3136:
case 347:
case 2731:
case 935:
case 3305:
case 1855:
case 2293:
case 703:
case 2106:
case 3431:
case 4028:
case 1925:
case 1396:
case 530:
case 3701:
case 1293:
case 519:
case 1808:
case 1687:
case 2396:
case 1335:
case 3264:
case 3773:
case 2473:
case 1401:
case 2855:
case 638:
case 3271:
case 4009:
case 1452:
case 1158:
case 1856:
case 3306:
case 3784:
case 907:
case 1233:
case 513:
case 2216:
case 194:
case 4014:
case 2959:
case 1543:
case 2336:
case 1621:
case 989:
case 1313:
case 2576:
case 3745:
case 1657:
case 716:
case 755:
case 2885:
case 3099:
case 2221:
case 2767:
case 1028:
case 2445:
case 3039:
case 65:
case 1446:
case 1842:
case 597:
case 2009:
case 3975:
case 2723:
case 3754:
case 420:
case 862:
case 3040:
case 3782:
case 506:
case 372:
case 2141:
case 683:
case 3589:
case 1454:
case 2188:
case 242:
case 2482:
case 369:
case 2446:
case 2842:
case 3065:
case 1693:
case 1767:
case 1445:
case 1633:
case 607:
case 2657:
case 3262:
case 411:
case 3671:
case 3976:
case 1460:
case 260:
case 3650:
case 689:
case 714:
case 809:
case 2440:
case 3887:
case 3383:
case 483:
case 2880:
case 3608:
case 1502:
case 2465:
case 576:
case 302:
case 3740:
case 2638:
case 3082:
case 1439:
case 694:
case 3361:
case 3951:
case 791:
case 677:
case 3656:
case 318:
case 3970:
case 4031:
case 1551:
case 3285:
case 803:
case 1161:
case 2610:
case 3821:
case 489:
case 2728:
case 2992:
case 611:
case 3060:
case 504:
case 3592:
case 3766:
case 1279:
case 54:
case 942:
case 3629:
case 496:
case 2466:
case 3577:
case 2862:
case 2551:
case 2499:
case 2570:
case 1977:
case 45:
case 960:
case 2709:
case 2174:
case 3054:
case 3739:
case 3286:
case 1440:
case 565:
case 620:
case 2322:
case 238:
case 1932:
case 1880:
case 581:
case 2994:
case 1031:
case 2318:
case 2548:
case 3208:
case 3149:
case 2581:
case 4067:
case 3815:
case 3124:
case 2153:
case 107:
case 1864:
case 83:
case 3217:
case 3904:
case 3084:
case 977:
case 2330:
case 183:
case 1504:
case 2210:
case 1850:
case 1871:
case 2803:
case 1519:
case 1349:
case 3256:
case 25:
case 911:
case 1712:
case 762:
case 2197:
case 1298:
case 2324:
case 1934:
case 3353:
case 3778:
case 2091:
case 2349:
case 15:
case 3229:
case 3412:
case 779:
case 2478:
case 283:
case 3052:
case 2504:
case 1210:
case 3927:
case 773:
case 289:
case 1581:
case 1390:
case 525:
case 1153:
case 3686:
case 2864:
case 3001:
case 2137:
case 356:
case 3948:
case 1238:
case 3130:
case 2031:
case 1318:
case 1668:
case 2072:
case 1705:
case 3018:
case 3626:
case 2469:
case 1435:
case 364:
case 1521:
case 2892:
case 1301:
case 2373:
case 3796:
case 3769:
case 1276:
case 2877:
case 271:
case 3736:
case 768:
case 2131:
case 3802:
case 2384:
case 684:
case 1053:
case 1495:
case 493:
case 217:
case 3101:
case 897:
case 1413:
case 2980:
case 305:
case 2000:
case 2832:
case 3049:
case 3391:
case 3625:
case 2053:
case 1436:
case 117:
case 3024:
case 62:
case 1000:
case 3713:
case 171:
case 3795:
case 450:
case 806:
case 4083:
case 486:
case 1373:
case 2962:
case 4074:
case 2276:
case 1191:
case 945:
case 901:
case 3405:
case 2668:
case 1072:
case 2705:
case 3331:
case 3659:
case 1496:
case 2435:
case 540:
case 3211:
case 2643:
case 2521:
case 1892:
case 1950:
case 3819:
case 1971:
case 3145:
case 2903:
case 2834:
case 1676:
case 776:
case 3550:
case 3571:
case 514:
case 2061:
case 3933:
case 4053:
case 324:
case 193:
case 232:
case 8:
case 2346:
case 1533:
case 1268:
case 3993:
case 199:
case 3564:
case 948:
case 1593:
case 984:
case 2675:
case 2894:
case 2123:
case 286:
case 3154:
case 1360:
case 3367:
case 3848:
case 1675:
case 1894:
case 3863:
case 2741:
case 1123:
case 522:
case 66:
case 3441:
case 2345:
case 74:
case 3323:
case 1061:
case 4000:
case 3611:
case 417:
case 293:
case 132:
case 2820:
case 1516:
case 1557:
case 390:
case 1903:
case 1083:
case 1834:
case 38:
case 3957:
case 3503:
case 1738:
case 943:
case 2609:
case 970:
case 1801:
case 3351:
case 2873:
case 731:
case 2614:
case 754:
case 651:
case 1016:
case 3302:
case 634:
case 3666:
case 2884:
case 3961:
case 1710:
case 1170:
case 3744:
case 1151:
case 1417:
case 3729:
case 3522:
case 2170:
case 2798:
case 482:
case 818:
case 2922:
case 200:
case 3050:
case 2417:
case 1212:
case 2628:
case 2456:
case 1884:
case 1033:
case 3717:
case 1429:
case 3192:
case 2710:
case 1455:
case 1093:
case 1377:
case 2801:
case 3132:
case 3064:
case 3438:
case 4021:
case 2738:
case 3640:
case 2574:
case 1392:
case 2408:
case 2647:
case 802:
case 2087:
case 2553:
case 3742:
case 295:
case 3080:
case 2148:
case 1247:
case 3937:
case 498:
case 1537:
case 2930:
case 2882:
case 282:
case 1845:
case 880:
case 951:
case 21:
case 934:
case 89:
case 1597:
case 2021:
case 3120:
case 2918:
case 3299:
case 1104:
case 236:
case 1779:
case 769:
case 2394:
case 1021:
case 3785:
case 2104:
case 2860:
case 136:
case 1127:
case 2779:
case 967:
case 2572:
case 4015:
case 3348:
case 1394:
case 11:
case 2485:
case 1990:
case 2597:
case 1846:
case 1209:
case 2247:
case 3823:
case 1163:
case 1882:
case 182:
case 1214:
case 2500:
case 355:
case 1907:
case 1553:
case 2949:
case 4033:
case 3507:
case 1181:
case 3953:
case 1426:
case 837:
case 2380:
case 3468:
case 1121:
case 1952:
case 2984:
case 563:
case 1027:
case 3759:
case 1187:
case 3501:
case 257:
case 2288:
case 1901:
case 2973:
case 569:
case 439:
case 2531:
case 572:
case 2241:
case 1425:
case 1531:
case 410:
case 4051:
case 1241:
case 3931:
case 3636:
case 2063:
case 4070:
case 3573:
case 2187:
case 157:
case 2081:
case 1973:
case 3180:
case 2606:
case 397:
case 1984:
case 1743:
case 3726:
case 4002:
case 2426:
case 2822:
case 1591:
case 288:
case 244:
case 3696:
case 726:
case 3476:
case 4081:
case 2205:
case 1133:
case 1960:
case 3872:
case 2567:
case 531:
case 554:
case 3171:
case 890:
case 2070:
case 3150:
case 3897:
case 88:
case 3077:
case 3545:
case 2890:
case 4048:
case 2946:
case 3213:
case 3837:
case 3333:
case 40:
case 2982:
case 1115:
case 2807:
case 1849:
case 529:
case 4027:
case 1193:
case 1350:
case 67:
case 285:
case 3032:
case 1824:
case 1371:
case 1489:
case 2115:
case 2206:
case 2193:
case 2350:
case 1688:
case 2371:
case 2489:
case 859:
case 1946:
case 1641:
case 1523:
case 221:
case 352:
case 3582:
case 4019:
case 233:
case 1982:
case 3316:
case 2775:
case 3296:
case 2945:
case 766:
case 3103:
case 1411:
case 2364:
case 239:
case 646:
case 1157:
case 1205:
case 824:
case 3:
case 457:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749319202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,];
var gg_b = "1749319202/";

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
