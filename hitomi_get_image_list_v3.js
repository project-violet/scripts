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
case 406:
case 3761:
case 1567:
case 2639:
case 3759:
case 3982:
case 3130:
case 2154:
case 3346:
case 2525:
case 3739:
case 714:
case 2964:
case 2361:
case 3376:
case 1195:
case 3689:
case 856:
case 3245:
case 1976:
case 1450:
case 1425:
case 771:
case 415:
case 275:
case 1795:
case 2286:
case 3426:
case 2796:
case 2806:
case 2034:
case 931:
case 2421:
case 1427:
case 1320:
case 2424:
case 1177:
case 1456:
case 3118:
case 798:
case 1459:
case 3575:
case 2324:
case 3805:
case 3832:
case 1440:
case 3336:
case 125:
case 2865:
case 416:
case 677:
case 743:
case 2280:
case 3763:
case 3744:
case 3598:
case 3508:
case 1234:
case 1518:
case 2787:
case 229:
case 2616:
case 3945:
case 1832:
case 2381:
case 182:
case 454:
case 1044:
case 3856:
case 512:
case 739:
case 1986:
case 2727:
case 960:
case 959:
case 2667:
case 3282:
case 3285:
case 2479:
case 2867:
case 1340:
case 1448:
case 4001:
case 1848:
case 1144:
case 4022:
case 2845:
case 3996:
case 3893:
case 505:
case 1074:
case 3783:
case 73:
case 2817:
case 3433:
case 2339:
case 632:
case 3675:
case 867:
case 1750:
case 804:
case 2333:
case 1799:
case 2076:
case 2347:
case 2319:
case 578:
case 11:
case 1364:
case 2528:
case 3999:
case 1096:
case 253:
case 2959:
case 214:
case 2493:
case 104:
case 1958:
case 910:
case 3391:
case 1662:
case 1487:
case 2156:
case 682:
case 3007:
case 2693:
case 395:
case 1692:
case 372:
case 161:
case 317:
case 1807:
case 637:
case 166:
case 1930:
case 180:
case 2645:
case 196:
case 1400:
case 1035:
case 2251:
case 859:
case 2555:
case 759:
case 3749:
case 3321:
case 3544:
case 1373:
case 3046:
case 777:
case 278:
case 2509:
case 293:
case 3751:
case 2543:
case 419:
case 1868:
case 3599:
case 1624:
case 3291:
case 974:
case 799:
case 497:
case 2777:
case 2467:
case 3201:
case 1006:
case 1553:
case 936:
case 3613:
case 888:
case 1594:
case 1001:
case 1363:
case 1883:
case 3896:
case 2708:
case 813:
case 424:
case 3238:
case 1629:
case 961:
case 589:
case 1965:
case 3524:
case 1759:
case 1719:
case 3006:
case 3943:
case 1714:
case 1739:
case 3029:
case 2902:
case 2231:
case 3241:
case 1118:
case 1254:
case 3424:
case 3836:
case 389:
case 2529:
case 849:
case 185:
case 1616:
case 1430:
case 3718:
case 879:
case 3849:
case 808:
case 44:
case 762:
case 1590:
case 484:
case 806:
case 1238:
case 2510:
case 1048:
case 2705:
case 810:
case 261:
case 2595:
case 2891:
case 3190:
case 850:
case 258:
case 3312:
case 3167:
case 2500:
case 3787:
case 1681:
case 1049:
case 270:
case 1587:
case 933:
case 3686:
case 3036:
case 2711:
case 14:
case 1240:
case 2088:
case 2417:
case 811:
case 3445:
case 3859:
case 1335:
case 4033:
case 1908:
case 784:
case 4045:
case 2323:
case 691:
case 2713:
case 562:
case 88:
case 2370:
case 1437:
case 2513:
case 3385:
case 1752:
case 4031:
case 3476:
case 894:
case 2570:
case 2158:
case 1898:
case 3435:
case 1356:
case 3314:
case 902:
case 3602:
case 288:
case 1534:
case 3280:
case 336:
case 1432:
case 3905:
case 780:
case 3111:
case 1037:
case 3627:
case 3890:
case 3351:
case 1870:
case 1674:
case 2695:
case 3361:
case 1357:
case 4094:
case 2114:
case 65:
case 1584:
case 3371:
case 1861:
case 3581:
case 1272:
case 1034:
case 3822:
case 4020:
case 2182:
case 2823:
case 962:
case 940:
case 1064:
case 2330:
case 1860:
case 1652:
case 2802:
case 1169:
case 169:
case 2056:
case 3117:
case 2643:
case 2898:
case 4068:
case 2636:
case 1622:
case 3964:
case 992:
case 3930:
case 1866:
case 1155:
case 3734:
case 2779:
case 1521:
case 56:
case 2503:
case 2405:
case 3325:
case 3507:
case 1619:
case 95:
case 1769:
case 1009:
case 2241:
case 1568:
case 3244:
case 1901:
case 4064:
case 3496:
case 1967:
case 3184:
case 1412:
case 1376:
case 506:
case 3966:
case 452:
case 1753:
case 3883:
case 2653:
case 1100:
case 1186:
case 2267:
case 769:
case 4060:
case 836:
case 650:
case 3142:
case 3044:
case 1803:
case 2344:
case 527:
case 3365:
case 2322:
case 1264:
case 3506:
case 1593:
case 98:
case 1334:
case 1537:
case 3193:
case 1321:
case 3202:
case 408:
case 1286:
case 3774:
case 2783:
case 3620:
case 2444:
case 176:
case 1447:
case 2362:
case 1963:
case 1496:
case 2443:
case 1668:
case 2626:
case 4089:
case 2121:
case 493:
case 2862:
case 3027:
case 4049:
case 2951:
case 703:
case 1477:
case 3635:
case 2404:
case 1740:
case 2704:
case 3650:
case 3567:
case 2958:
case 3332:
case 2003:
case 2480:
case 2776:
case 2934:
case 1888:
case 344:
case 2301:
case 2949:
case 1115:
case 3262:
case 3971:
case 586:
case 2622:
case 286:
case 530:
case 3694:
case 0:
case 141:
case 212:
case 3139:
case 3959:
case 1764:
case 1921:
case 733:
case 445:
case 3695:
case 250:
case 2318:
case 2048:
case 735:
case 738:
case 563:
case 3005:
case 1951:
case 1666:
case 430:
case 1207:
case 3648:
case 1386:
case 1971:
case 1461:
case 2124:
case 1519:
case 2290:
case 3490:
case 3454:
case 2873:
case 2016:
case 2736:
case 1387:
case 2850:
case 3406:
case 3441:
case 1761:
case 1339:
case 3126:
case 2475:
case 1756:
case 2315:
case 2940:
case 3963:
case 1757:
case 2738:
case 1111:
case 1130:
case 2649:
case 1248:
case 615:
case 3102:
case 1416:
case 963:
case 1856:
case 551:
case 81:
case 1571:
case 3026:
case 3579:
case 3988:
case 2100:
case 3436:
case 3958:
case 1067:
case 4074:
case 1404:
case 1973:
case 1145:
case 1170:
case 2840:
case 2346:
case 3222:
case 173:
case 3713:
case 3318:
case 2519:
case 367:
case 2432:
case 3728:
case 2051:
case 3087:
case 1395:
case 3105:
case 3573:
case 1194:
case 1570:
case 420:
case 3342:
case 3188:
case 2635:
case 1036:
case 1671:
case 3438:
case 1:
case 685:
case 671:
case 2097:
case 1559:
case 1929:
case 886:
case 2748:
case 2485:
case 1721:
case 2039:
case 1369:
case 2021:
case 3322:
case 325:
case 1047:
case 585:
case 3707:
case 1261:
case 3043:
case 3994:
case 1884:
case 1316:
case 610:
case 2638:
case 3070:
case 663:
case 654:
case 2277:
case 2210:
case 2557:
case 1204:
case 2425:
case 2664:
case 2731:
case 2569:
case 354:
case 1154:
case 568:
case 1524:
case 1206:
case 1808:
case 3604:
case 3562:
case 2918:
case 1660:
case 3446:
case 2057:
case 3924:
case 1576:
case 2782:
case 1079:
case 639:
case 1710:
case 1982:
case 3838:
case 1520:
case 1298:
case 3846:
case 396:
case 770:
case 1283:
case 137:
case 1724:
case 2445:
case 2778:
case 1546:
case 2774:
case 2994:
case 2937:
case 2762:
case 1421:
case 915:
case 1514:
case 2409:
case 1574:
case 1985:
case 2177:
case 264:
case 2349:
case 334:
case 2827:
case 1996:
case 2472:
case 1843:
case 1706:
case 4029:
case 1813:
case 982:
case 3200:
case 1065:
case 717:
case 3161:
case 616:
case 491:
case 1680:
case 301:
case 3651:
case 3729:
case 2603:
case 1812:
case 1327:
case 1097:
case 3377:
case 2807:
case 1076:
case 772:
case 3825:
case 2368:
case 903:
case 2786:
case 378:
case 1857:
case 971:
case 1091:
case 2810:
case 1150:
case 3294:
case 2932:
case 2647:
case 2682:
case 3977:
case 2899:
case 282:
case 2605:
case 1103:
case 2988:
case 1258:
case 3310:
case 997:
case 3601:
case 636:
case 3403:
case 1063:
case 2558:
case 87:
case 1092:
case 2875:
case 2453:
case 1308:
case 2263:
case 3929:
case 3595:
case 1299:
case 2414:
case 1323:
case 2990:
case 2707:
case 1787:
case 2426:
case 3465:
case 3969:
case 2171:
case 3217:
case 306:
case 3664:
case 449:
case 3010:
case 619:
case 1293:
case 3794:
case 3045:
case 431:
case 245:
case 2040:
case 1928:
case 3873:
case 2354:
case 2866:
case 2413:
case 2604:
case 156:
case 3852:
case 3112:
case 1397:
case 1007:
case 2229:
case 2717:
case 2690:
case 2501:
case 2035:
case 409:
case 3067:
case 3034:
case 3094:
case 266:
case 1434:
case 2302:
case 3113:
case 4075:
case 3710:
case 3173:
case 3462:
case 2167:
case 2599:
case 403:
case 1605:
case 978:
case 3721:
case 3641:
case 392:
case 1077:
case 2283:
case 4008:
case 2633:
case 1826:
case 3937:
case 2694:
case 1221:
case 3725:
case 2193:
case 2235:
case 2127:
case 52:
case 3672:
case 4009:
case 3405:
case 3946:
case 3960:
case 1585:
case 2878:
case 3682:
case 988:
case 1779:
case 2306:
case 339:
case 3645:
case 3178:
case 977:
case 3693:
case 3786:
case 2006:
case 1793:
case 3624:
case 316:
case 2111:
case 1073:
case 3081:
case 848:
case 2730:
case 2644:
case 138:
case 2685:
case 657:
case 3912:
case 3153:
case 2945:
case 54:
case 3025:
case 135:
case 1983:
case 3965:
case 1134:
case 2393:
case 1322:
case 4039:
case 710:
case 1488:
case 4003:
case 3375:
case 3162:
case 3097:
case 3480:
case 2518:
case 2065:
case 2304:
case 2234:
case 1788:
case 1276:
case 1466:
case 2681:
case 1019:
case 2886:
case 3246:
case 3711:
case 1378:
case 318:
case 1855:
case 1960:
case 3764:
case 2843:
case 3681:
case 831:
case 577:
case 1853:
case 1396:
case 70:
case 3090:
case 3527:
case 556:
case 3572:
case 704:
case 1833:
case 3251:
case 1201:
case 993:
case 2138:
case 1033:
case 3835:
case 939:
case 1326:
case 2788:
case 1125:
case 123:
case 1324:
case 945:
case 3876:
case 2769:
case 2757:
case 3970:
case 3033:
case 3237:
case 789:
case 3484:
case 3628:
case 1650:
case 2889:
case 537:
case 1601:
case 3570:
case 4016:
case 1385:
case 2767:
case 298:
case 2733:
case 914:
case 1600:
case 3782:
case 2611:
case 2836:
case 2523:
case 807:
case 1084:
case 401:
case 846:
case 2656:
case 1755:
case 2574:
case 159:
case 1955:
case 2357:
case 1978:
case 2232:
case 1623:
case 2173:
case 540:
case 2623:
case 3380:
case 2038:
case 760:
case 2050:
case 209:
case 3600:
case 2808:
case 972:
case 2262:
case 2989:
case 4073:
case 2668:
case 447:
case 4032:
case 1057:
case 3974:
case 1531:
case 1050:
case 1695:
case 912:
case 1820:
case 543:
case 1916:
case 3096:
case 283:
case 1025:
case 609:
case 3819:
case 1489:
case 1831:
case 499:
case 3906:
case 897:
case 2575:
case 3349:
case 1786:
case 1626:
case 2067:
case 2215:
case 602:
case 2273:
case 672:
case 1858:
case 455:
case 3003:
case 1273:
case 1152:
case 3578:
case 604:
case 3770:
case 4088:
case 768:
case 4011:
case 1407:
case 1977:
case 2459:
case 2253:
case 3845:
case 2337:
case 461:
case 129:
case 571:
case 490:
case 1072:
case 1105:
case 3335:
case 2291:
case 1297:
case 881:
case 3657:
case 3990:
case 2815:
case 3727:
case 3907:
case 2794:
case 2597:
case 3004:
case 1490:
case 1500:
case 3062:
case 935:
case 2481:
case 2559:
case 105:
case 3195:
case 1687:
case 210:
case 3023:
case 1184:
case 2203:
case 855:
case 3387:
case 3926:
case 3777:
case 3408:
case 2054:
case 3778:
case 3667:
case 2398:
case 2411:
case 1850:
case 1314:
case 1443:
case 3948:
case 1935:
case 2749:
case 1926:
case 3934:
case 3670:
case 2588:
case 2448:
case 1231:
case 3547:
case 1911:
case 3724:
case 3021:
case 152:
case 3109:
case 3614:
case 863:
case 956:
case 3626:
case 146:
case 3401:
case 2208:
case 1773:
case 1216:
case 502:
case 3652:
case 2391:
case 3119:
case 1159:
case 593:
case 3299:
case 1539:
case 1046:
case 2540:
case 1382:
case 2371:
case 3264:
case 790:
case 1628:
case 3169:
case 3481:
case 2984:
case 1627:
case 2155:
case 2822:
case 3307:
case 3720:
case 3471:
case 740:
case 4026:
case 91:
case 3817:
case 1080:
case 1141:
case 404:
case 2914:
case 2233:
case 3593:
case 469:
case 3847:
case 480:
case 2634:
case 1716:
case 1377:
case 4028:
case 954:
case 1471:
case 3767:
case 2147:
case 2278:
case 3354:
case 3916:
case 3347:
case 3618:
case 2146:
case 3378:
case 3373:
case 1161:
case 947:
case 3344:
case 276:
case 1043:
case 913:
case 4004:
case 2274:
case 1775:
case 1185:
case 3089:
case 981:
case 664:
case 3016:
case 100:
case 1499:
case 546:
case 941:
case 3559:
case 865:
case 895:
case 3568:
case 108:
case 3:
case 528:
case 1655:
case 1890:
case 3372:
case 2924:
case 3868:
case 1332:
case 243:
case 3922:
case 796:
case 2548:
case 1887:
case 1164:
case 3989:
case 1467:
case 1213:
case 641:
case 3136:
case 3993:
case 3196:
case 2317:
case 598:
case 3918:
case 1349:
case 2953:
case 1317:
case 1657:
case 2183:
case 596:
case 188:
case 3468:
case 4056:
case 1684:
case 1428:
case 3742:
case 2198:
case 1508:
case 460:
case 1541:
case 2148:
case 973:
case 82:
case 923:
case 3256:
case 3649:
case 1608:
case 2871:
case 1158:
case 2204:
case 1189:
case 312:
case 2552:
case 2515:
case 113:
case 890:
case 1631:
case 2310:
case 487:
case 1698:
case 1505:
case 3784:
case 2916:
case 731:
case 1291:
case 2627:
case 1991:
case 3134:
case 2986:
case 3874:
case 2073:
case 2348:
case 2001:
case 2077:
case 2471:
case 1589:
case 49:
case 864:
case 2181:
case 2632:
case 1835:
case 2340:
case 2829:
case 145:
case 3769:
case 3494:
case 661:
case 1481:
case 4024:
case 2973:
case 1175:
case 560:
case 179:
case 756:
case 2112:
case 2134:
case 3810:
case 2311:
case 812:
case 109:
case 629:
case 3230:
case 1160:
case 802:
case 3995:
case 2709:
case 114:
case 2561:
case 2428:
case 3488:
case 2214:
case 3792:
case 2797:
case 3449:
case 2075:
case 1021:
case 3955:
case 3666:
case 3390:
case 483:
case 1862:
case 3168:
case 1414:
case 2462:
case 2237:
case 2271:
case 256:
case 1995:
case 2980:
case 2375:
case 3374:
case 1827:
case 987:
case 1979:
case 3732:
case 1384:
case 303:
case 534:
case 2688:
case 2116:
case 1224:
case 4050:
case 2954:
case 3099:
case 2179:
case 2455:
case 937:
case 3487:
case 2542:
case 2081:
case 1478:
case 482:
case 1744:
case 1222:
case 3140:
case 4082:
case 2061:
case 2427:
case 1249:
case 198:
case 437:
case 1484:
case 1085:
case 911:
case 425:
case 2876:
case 2374:
case 3148:
case 1004:
case 2650:
case 2950:
case 3591:
case 2824:
case 3551:
case 32:
case 2442:
case 289:
case 3840:
case 3809:
case 805:
case 920:
case 3295:
case 2908:
case 97:
case 1647:
case 242:
case 2126:
case 3866:
case 3413:
case 162:
case 3131:
case 1780:
case 1770:
case 3644:
case 3093:
case 1472:
case 3679:
case 4067:
case 535:
case 3535:
case 2706:
case 3915:
case 1654:
case 48:
case 3738:
case 1388:
case 815:
case 2968:
case 3145:
case 3560:
case 322:
case 1656:
case 341:
case 195:
case 1821:
case 834:
case 43:
case 1760:
case 1436:
case 2620:
case 2971:
case 3382:
case 3415:
case 1953:
case 3542:
case 13:
case 1295:
case 3110:
case 1824:
case 148:
case 2008:
case 51:
case 150:
case 2151:
case 3450:
case 3052:
case 1591:
case 2295:
case 7:
case 2367:
case 3014:
case 2168:
case 522:
case 2010:
case 658:
case 1485:
case 926:
case 1370:
case 3348:
case 2104:
case 291:
case 136:
case 2293:
case 751:
case 626:
case 2083:
case 3771:
case 3137:
case 4034:
case 2987:
case 3220:
case 466:
case 3848:
case 4030:
case 249:
case 1187:
case 2832:
case 3785:
case 2382:
case 3592:
case 3730:
case 2520:
case 2999:
case 386:
case 2547:
case 1844:
case 1052:
case 2189:
case 1634:
case 2943:
case 3698:
case 1168:
case 170:
case 2809:
case 41:
case 28:
case 2031:
case 861:
case 79:
case 2897:
case 1941:
case 990:
case 1366:
case 4083:
case 791:
case 1533:
case 1433:
case 190:
case 3491:
case 78:
case 4044:
case 4053:
case 2144:
case 765:
case 3002:
case 2765:
case 1981:
case 1126:
case 485:
case 1143:
case 932:
case 1304:
case 3138:
case 3781:
case 3076:
case 566:
case 1016:
case 1166:
case 2844:
case 1214:
case 1431:
case 3865:
case 3942:
case 402:
case 1133:
case 686:
case 3501:
case 187:
case 2556:
case 2030:
case 2752:
case 3463:
case 1123:
case 121:
case 1183:
case 216:
case 2652:
case 1419:
case 2218:
case 588:
case 3617:
case 387:
case 3882:
case 3863:
case 3540:
case 1906:
case 1540:
case 3064:
case 3048:
case 1809:
case 1236:
case 2919:
case 1350:
case 1642:
case 313:
case 1938:
case 124:
case 2586:
case 177:
case 1255:
case 332:
case 2795:
case 2451:
case 2719:
case 2227:
case 3197:
case 1811:
case 2814:
case 976:
case 1223:
case 2011:
case 3414:
case 3243:
case 925:
case 478:
case 369:
case 1172:
case 1774:
case 2912:
case 1863:
case 2022:
case 1731:
case 4052:
case 2079:
case 2729:
case 3877:
case 3889:
case 1352:
case 3705:
case 1372:
case 71:
case 501:
case 2043:
case 233:
case 3165:
case 178:
case 2851:
case 2642:
case 2744:
case 2246:
case 3541:
case 635:
case 3633:
case 203:
case 3539:
case 696:
case 3780:
case 1403:
case 225:
case 3123:
case 1020:
case 3821:
case 3439:
case 2673:
case 583:
case 2122:
case 1517:
case 3343:
case 3826:
case 2197:
case 1564:
case 2842:
case 3933:
case 3255:
case 3587:
case 1736:
case 1465:
case 3302:
case 2435:
case 732:
case 2423:
case 2785:
case 1776:
case 55:
case 2947:
case 2123:
case 3489:
case 2169:
case 1688:
case 2191:
case 352:
case 371:
case 1678:
case 2249:
case 3219:
case 844:
case 2026:
case 642:
case 2247:
case 3530:
case 2826:
case 2563:
case 3715:
case 880:
case 2101:
case 3473:
case 2651:
case 3855:
case 1841:
case 2032:
case 280:
case 2341:
case 542:
case 3733:
case 1239:
case 1725:
case 2630:
case 2923:
case 3001:
case 383:
case 1108:
case 3297:
case 134:
case 3747:
case 1227:
case 2141:
case 444:
case 554:
case 3523:
case 878:
case 2993:
case 3968:
case 995:
case 1897:
case 3333:
case 1000:
case 4095:
case 869:
case 3437:
case 300:
case 446:
case 693:
case 2068:
case 1266:
case 2920:
case 2188:
case 1743:
case 3455:
case 3510:
case 2256:
case 1082:
case 1310:
case 106:
case 2454:
case 160:
case 3394:
case 2128:
case 1640:
case 2408:
case 706:
case 1917:
case 724:
case 3370:
case 2270:
case 1715:
case 1502:
case 725:
case 471:
case 670:
case 2847:
case 2905:
case 1763:
case 3531:
case 3680:
case 3122:
case 377:
case 1598:
case 3897:
case 783:
case 2113:
case 3947:
case 1099:
case 3182:
case 651:
case 965:
case 984:
case 27:
case 794:
case 2353:
case 1992:
case 1797:
case 858:
case 2766:
case 2236:
case 1852:
case 1733:
case 3938:
case 1360:
case 782:
case 946:
case 3520:
case 2689:
case 1362:
case 3015:
case 1270:
case 927:
case 3240:
case 689:
case 1806:
case 2571:
case 634:
case 421:
case 1550:
case 3063:
case 3760:
case 1368:
case 3833:
case 949:
case 3315:
case 2816:
case 434:
case 3949:
case 1482:
case 2118:
case 2684:
case 3453:
case 2978:
case 2297:
case 3086:
case 3887:
case 2243:
case 3662:
case 2870:
case 1925:
case 1426:
case 257:
case 373:
case 3701:
case 3272:
case 1882:
case 4063:
case 458:
case 649:
case 2312:
case 1501:
case 533:
case 4019:
case 967:
case 2261:
case 74:
case 3895:
case 3065:
case 2514:
case 1730:
case 1246:
case 3231:
case 2464:
case 1415:
case 620:
case 2915:
case 3411:
case 2074:
case 1597:
case 2674:
case 284:
case 666:
case 2927:
case 721:
case 3654:
case 2799:
case 523:
case 3816:
case 3192:
case 30:
case 1210:
case 331:
case 3748:
case 2607:
case 1468:
case 531:
case 251:
case 644:
case 2196:
case 3577:
case 3327:
case 3338:
case 155:
case 2683:
case 1676:
case 3051:
case 683:
case 2996:
case 4002:
case 1658:
case 2508:
case 3393:
case 128:
case 702:
case 1129:
case 572:
case 660:
case 3735:
case 2013:
case 1110:
case 1702:
case 2129:
case 2447:
case 1617:
case 2091:
case 3331:
case 1670:
case 3642:
case 3687:
case 1083:
case 474:
case 656:
case 1116:
case 2618:
case 2805:
case 2961:
case 2474:
case 241:
case 841:
case 1463:
case 2395:
case 1894:
case 2497:
case 83:
case 614:
case 1018:
case 1542:
case 2298:
case 1810:
case 3582:
case 2602:
case 122:
case 2137:
case 1877:
case 151:
case 2917:
case 6:
case 2834:
case 3108:
case 3075:
case 2852:
case 3512:
case 1358:
case 1060:
case 1980:
case 1836:
case 2535:
case 4035:
case 57:
case 3069:
case 2600:
case 1696:
case 2458:
case 924:
case 2499:
case 1663:
case 2490:
case 1954:
case 1705:
case 2178:
case 2896:
case 1588:
case 1260:
case 1389:
case 3829:
case 66:
case 749:
case 2854:
case 2351:
case 3419:
case 3571:
case 1054:
case 2224:
case 1528:
case 370:
case 1839:
case 1102:
case 2716:
case 3358:
case 752:
case 3477:
case 1128:
case 1943:
case 2023:
case 3827:
case 3129:
case 96:
case 4007:
case 3236:
case 1005:
case 1768:
case 3356:
case 1460:
case 2580:
case 2992:
case 3737:
case 3360:
case 2610:
case 3533:
case 2033:
case 2095:
case 463:
case 4072:
case 2119:
case 3339:
case 3259:
case 792:
case 1257:
case 442:
case 2966:
case 2052:
case 1253:
case 2225:
case 3557:
case 3653:
case 4071:
case 15:
case 2372:
case 3750:
case 697:
case 3011:
case 2402:
case 153:
case 456:
case 2803:
case 3156:
case 1738:
case 2922:
case 3696:
case 3432:
case 1727:
case 3973:
case 1828:
case 2879:
case 1703:
case 2106:
case 561:
case 3308:
case 3229:
case 565:
case 3637:
case 1032:
case 2194:
case 239:
case 3214:
case 3293:
case 2037:
case 1854:
case 3640:
case 2044:
case 1251:
case 2888:
case 803:
case 1024:
case 2170:
case 1728:
case 2631:
case 2303:
case 3797:
case 2732:
case 3058:
case 2378:
case 255:
case 2080:
case 2907:
case 2419:
case 2379:
case 638:
case 116:
case 1441:
case 4014:
case 3066:
case 821:
case 1767:
case 3423:
case 1947:
case 3741:
case 1543:
case 448:
case 3458:
case 1151:
case 793:
case 2534:
case 503:
case 3623:
case 50:
case 1017:
case 1243:
case 4061:
case 1329:
case 40:
case 2098:
case 1281:
case 1742:
case 3610:
case 3776:
case 675:
case 665:
case 3638:
case 3521:
case 3647:
case 1462:
case 2092:
case 432:
case 2356:
case 131:
case 1474:
case 2230:
case 1573:
case 3177:
case 1455:
case 230:
case 174:
case 1454:
case 3457:
case 3755:
case 2743:
case 3232:
case 2140:
case 429:
case 1306:
case 1919:
case 3289:
case 3440:
case 1153:
case 590:
case 17:
case 3585:
case 1579:
case 1014:
case 2739:
case 3691:
case 3363:
case 3012:
case 2572:
case 3532:
case 1039:
case 1686:
case 876:
case 427:
case 3549:
case 955:
case 3298:
case 157:
case 3543:
case 3041:
case 1294:
case 1390:
case 966:
case 2070:
case 2221:
case 3758:
case 3954:
case 3207:
case 496:
case 684:
case 2505:
case 700:
case 1124:
case 1931:
case 3147:
case 2900:
case 3486:
case 459:
case 2373:
case 2307:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1662746401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,];
var gg_b = "1662746401/";

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
