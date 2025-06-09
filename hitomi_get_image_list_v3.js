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
case 1267:
case 938:
case 3176:
case 2930:
case 2533:
case 545:
case 1376:
case 1040:
case 63:
case 2699:
case 1493:
case 875:
case 2292:
case 2421:
case 1917:
case 2045:
case 1242:
case 1935:
case 2443:
case 1672:
case 2090:
case 1649:
case 3588:
case 463:
case 3519:
case 2320:
case 244:
case 2950:
case 3772:
case 3749:
case 2614:
case 841:
case 1325:
case 2416:
case 1468:
case 3847:
case 621:
case 737:
case 2611:
case 1784:
case 1240:
case 1117:
case 3335:
case 3609:
case 696:
case 3202:
case 3976:
case 1873:
case 2504:
case 1763:
case 1709:
case 187:
case 1798:
case 176:
case 3663:
case 3486:
case 3770:
case 1807:
case 2748:
case 2589:
case 4080:
case 4009:
case 1476:
case 2903:
case 2785:
case 3193:
case 948:
case 2134:
case 406:
case 2294:
case 325:
case 2343:
case 1244:
case 2838:
case 95:
case 1505:
case 1780:
case 2977:
case 234:
case 1727:
case 718:
case 3253:
case 3864:
case 2288:
case 3774:
case 997:
case 1023:
case 480:
case 1829:
case 2969:
case 831:
case 3883:
case 1425:
case 3089:
case 323:
case 1986:
case 4063:
case 80:
case 319:
case 1368:
case 3839:
case 3033:
case 426:
case 3861:
case 2151:
case 4081:
case 122:
case 1578:
case 3545:
case 2103:
case 491:
case 1044:
case 2502:
case 3590:
case 305:
case 3968:
case 2291:
case 1637:
case 210:
case 2131:
case 917:
case 3386:
case 3455:
case 399:
case 3859:
case 1615:
case 2169:
case 1671:
case 798:
case 3682:
case 82:
case 2610:
case 1241:
case 2954:
case 2422:
case 691:
case 3728:
case 1543:
case 145:
case 3342:
case 3379:
case 1995:
case 1521:
case 1713:
case 2305:
case 2593:
case 2661:
case 760:
case 1167:
case 1035:
case 3100:
case 3367:
case 2945:
case 2050:
case 2882:
case 2568:
case 3225:
case 1453:
case 2796:
case 879:
case 3554:
case 1055:
case 3102:
case 2230:
case 1967:
case 1404:
case 3638:
case 3503:
case 1302:
case 1140:
case 3551:
case 44:
case 268:
case 1235:
case 342:
case 1979:
case 3340:
case 1758:
case 1606:
case 606:
case 2729:
case 3025:
case 1489:
case 587:
case 751:
case 3441:
case 774:
case 1885:
case 3706:
case 3577:
case 1738:
case 3812:
case 3569:
case 2880:
case 350:
case 2664:
case 502:
case 2405:
case 496:
case 2809:
case 277:
case 970:
case 2898:
case 3765:
case 192:
case 135:
case 3442:
case 3532:
case 421:
case 2051:
case 3467:
case 3904:
case 2707:
case 2194:
case 3133:
case 3811:
case 2576:
case 3293:
case 2234:
case 1848:
case 3268:
case 2660:
case 133:
case 1301:
case 329:
case 2077:
case 3101:
case 3918:
case 728:
case 2254:
case 3989:
case 539:
case 1086:
case 1923:
case 1665:
case 200:
case 3104:
case 3797:
case 4046:
case 1402:
case 2881:
case 2203:
case 3530:
case 3933:
case 416:
case 3093:
case 3808:
case 395:
case 2034:
case 3440:
case 3899:
case 2478:
case 112:
case 401:
case 665:
case 3495:
case 43:
case 3189:
case 3953:
case 3118:
case 1522:
case 2919:
case 836:
case 3341:
case 2366:
case 1123:
case 3068:
case 1318:
case 2988:
case 927:
case 220:
case 2231:
case 964:
case 2269:
case 708:
case 3045:
case 3421:
case 92:
case 2002:
case 1187:
case 3443:
case 3090:
case 2176:
case 2594:
case 1332:
case 3699:
case 3292:
case 353:
case 1708:
case 1799:
case 437:
case 1454:
case 1120:
case 3152:
case 2519:
case 3553:
case 3320:
case 1922:
case 2772:
case 608:
case 3290:
case 1403:
case 2698:
case 2609:
case 2202:
case 2976:
case 3675:
case 90:
case 3932:
case 1330:
case 763:
case 931:
case 3245:
case 1278:
case 152:
case 2335:
case 2000:
case 1648:
case 1987:
case 1451:
case 2317:
case 2684:
case 2770:
case 3748:
case 3952:
case 1523:
case 1920:
case 3589:
case 2860:
case 1541:
case 4012:
case 85:
case 1122:
case 3518:
case 3424:
case 1865:
case 140:
case 578:
case 1775:
case 2486:
case 2925:
case 848:
case 1469:
case 1121:
case 3343:
case 2627:
case 1542:
case 1579:
case 3838:
case 1143:
case 1334:
case 3785:
case 1806:
case 962:
case 58:
case 3903:
case 3500:
case 498:
case 2193:
case 3134:
case 4075:
case 1567:
case 447:
case 1116:
case 1066:
case 3316:
case 567:
case 2201:
case 2018:
case 3420:
case 2253:
case 2864:
case 3219:
case 1924:
case 114:
case 2680:
case 3091:
case 3288:
case 2774:
case 791:
case 3103:
case 2204:
case 2715:
case 1303:
case 3502:
case 2993:
case 205:
case 3934:
case 1710:
case 3094:
case 2771:
case 973:
case 2033:
case 2417:
case 674:
case 1595:
case 1921:
case 3846:
case 2861:
case 1540:
case 2435:
case 651:
case 3151:
case 2218:
case 706:
case 2289:
case 203:
case 2001:
case 3324:
case 1450:
case 2968:
case 3088:
case 2386:
case 2455:
case 310:
case 838:
case 2053:
case 975:
case 2859:
case 3169:
case 130:
case 1331:
case 489:
case 1392:
case 2534:
case 2902:
case 827:
case 3192:
case 3639:
case 2367:
case 3945:
case 1978:
case 2342:
case 1105:
case 1287:
case 3252:
case 1837:
case 1488:
case 689:
case 2554:
case 758:
case 1419:
case 3050:
case 2810:
case 3882:
case 1739:
case 1871:
case 4062:
case 3568:
case 1905:
case 1178:
case 368:
case 2395:
case 3729:
case 3378:
case 2638:
case 2503:
case 3145:
case 1764:
case 3052:
case 957:
case 250:
case 2025:
case 3683:
case 178:
case 647:
case 540:
case 2658:
case 2706:
case 2423:
case 870:
case 1760:
case 1394:
case 3051:
case 2904:
case 2467:
case 3707:
case 2133:
case 2811:
case 3576:
case 1870:
case 2293:
case 3234:
case 2875:
case 408:
case 2344:
case 3405:
case 18:
case 215:
case 2765:
case 3898:
case 1673:
case 2918:
case 2153:
case 4083:
case 1966:
case 3069:
case 882:
case 2552:
case 2826:
case 3119:
case 3773:
case 300:
case 3525:
case 3991:
case 1216:
case 229:
case 3884:
case 716:
case 1607:
case 3077:
case 2101:
case 2093:
case 2808:
case 3034:
case 232:
case 1747:
case 1517:
case 4061:
case 2104:
case 2797:
case 3203:
case 1043:
case 1021:
case 4039:
case 1762:
case 3994:
case 2933:
case 104:
case 320:
case 3191:
case 3269:
case 3054:
case 2901:
case 293:
case 483:
case 3662:
case 1391:
case 1555:
case 796:
case 3277:
case 4059:
case 2323:
case 3647:
case 209:
case 2118:
case 1224:
case 1016:
case 3919:
case 721:
case 637:
case 530:
case 2010:
case 2962:
case 1733:
case 363:
case 3850:
case 1556:
case 1997:
case 1037:
case 609:
case 2212:
case 3744:
case 2619:
case 930:
case 175:
case 3514:
case 1644:
case 695:
case 3830:
case 3227:
case 1753:
case 849:
case 365:
case 2496:
case 2694:
case 1701:
case 173:
case 4002:
case 1057:
case 1446:
case 372:
case 1965:
case 1623:
case 3689:
case 3618:
case 1271:
case 2147:
case 86:
case 3526:
case 3852:
case 3397:
case 1704:
case 2563:
case 3080:
case 2691:
case 2598:
case 4000:
case 3604:
case 3575:
case 1438:
case 256:
case 1074:
case 887:
case 162:
case 1257:
case 466:
case 3741:
case 876:
case 1718:
case 3084:
case 1700:
case 3877:
case 650:
case 557:
case 1824:
case 3465:
case 3958:
case 3113:
case 380:
case 2159:
case 423:
case 4089:
case 2705:
case 2580:
case 2983:
case 3063:
case 1249:
case 311:
case 3803:
case 3098:
case 1679:
case 2396:
case 298:
case 131:
case 306:
case 2075:
case 642:
case 2011:
case 1346:
case 1070:
case 3600:
case 2299:
case 4004:
case 3146:
case 3938:
case 3851:
case 710:
case 1816:
case 2582:
case 3913:
case 3795:
case 3740:
case 1358:
case 1928:
case 2329:
case 289:
case 2959:
case 4001:
case 403:
case 2164:
case 1702:
case 3497:
case 2645:
case 1821:
case 2939:
case 3602:
case 3209:
case 1049:
case 1695:
case 2008:
case 2893:
case 1640:
case 3834:
case 2099:
case 734:
case 1270:
case 3306:
case 218:
case 2211:
case 3559:
case 1097:
case 3180:
case 904:
case 1265:
case 2654:
case 2721:
case 2062:
case 2910:
case 2513:
case 1793:
case 2456:
case 2047:
case 1915:
case 2385:
case 369:
case 845:
case 2260:
case 699:
case 854:
case 3693:
case 541:
case 2716:
case 3539:
case 1768:
case 2802:
case 274:
case 1481:
case 1957:
case 3890:
case 3449:
case 3472:
case 3845:
case 843:
case 4025:
case 2262:
case 1115:
case 1463:
case 3315:
case 1065:
case 2631:
case 260:
case 2060:
case 1484:
case 1171:
case 2110:
case 2558:
case 3182:
case 450:
case 1157:
case 2724:
case 625:
case 3357:
case 3892:
case 3927:
case 2800:
case 146:
case 562:
case 2538:
case 3786:
case 1805:
case 4076:
case 1498:
case 1409:
case 3213:
case 3891:
case 157:
case 2652:
case 1228:
case 3984:
case 2064:
case 413:
case 978:
case 2889:
case 3963:
case 3560:
case 3625:
case 2818:
case 1507:
case 892:
case 2485:
case 835:
case 415:
case 2975:
case 531:
case 3676:
case 3038:
case 2804:
case 3474:
case 321:
case 1573:
case 1970:
case 3349:
case 2853:
case 2264:
case 409:
case 1028:
case 812:
case 1655:
case 3819:
case 1363:
case 3562:
case 777:
case 1384:
case 3258:
case 493:
case 3471:
case 786:
case 3717:
case 2801:
case 52:
case 3046:
case 1949:
case 3370:
case 1635:
case 2722:
case 1170:
case 3894:
case 2039:
case 228:
case 2111:
case 495:
case 4093:
case 1309:
case 432:
case 2908:
case 285:
case 136:
case 301:
case 3755:
case 453:
case 3619:
case 1855:
case 2744:
case 337:
case 2653:
case 2365:
case 3947:
case 2428:
case 2514:
case 766:
case 1360:
case 620:
case 2601:
case 3160:
case 1285:
case 3307:
case 2850:
case 2633:
case 1439:
case 4045:
case 2599:
case 2508:
case 4090:
case 1835:
case 1173:
case 2227:
case 3581:
case 3373:
case 1572:
case 265:
case 1549:
case 852:
case 2852:
case 3162:
case 1464:
case 3691:
case 3960:
case 2080:
case 1362:
case 272:
case 939:
case 197:
case 3429:
case 1347:
case 3825:
case 1483:
case 507:
case 600:
case 3210:
case 2511:
case 1973:
case 840:
case 902:
case 2406:
case 3766:
case 570:
case 677:
case 4092:
case 3509:
case 2027:
case 1791:
case 1359:
case 3214:
case 490:
case 1929:
case 2958:
case 987:
case 2831:
case 280:
case 2869:
case 3983:
case 976:
case 2063:
case 3705:
case 434:
case 3964:
case 1460:
case 2767:
case 3299:
case 1048:
case 2938:
case 2851:
case 2281:
case 211:
case 2098:
case 3527:
case 3473:
case 96:
case 3075:
case 398:
case 703:
case 1574:
case 1196:
case 1537:
case 659:
case 3164:
case 2497:
case 1364:
case 3226:
case 3014:
case 2158:
case 2913:
case 1571:
case 4088:
case 4019:
case 1129:
case 3183:
case 725:
case 389:
case 3778:
case 2284:
case 3959:
case 3329:
case 1056:
case 1447:
case 481:
case 291:
case 1996:
case 2834:
case 3211:
case 1678:
case 2306:
case 4094:
case 3645:
case 1036:
case 3275:
case 2138:
case 3690:
case 5:
case 894:
case 2209:
case 2946:
case 2298:
case 3961:
case 517:
case 1734:
case 3456:
case 3385:
case 3260:
case 1185:
case 2668:
case 164:
case 2559:
case 2180:
case 3743:
case 1414:
case 459:
case 3721:
case 3513:
case 3062:
case 3910:
case 1273:
case 3802:
case 374:
case 1643:
case 2449:
case 2890:
case 351:
case 1621:
case 2374:
case 3546:
case 1499:
case 1840:
case 2693:
case 3716:
case 912:
case 4030:
case 2371:
case 761:
case 3060:
case 3912:
case 3110:
case 3558:
case 3247:
case 1007:
case 4052:
case 3669:
case 597:
case 690:
case 1426:
case 1703:
case 2315:
case 1475:
case 4032:
case 1769:
case 2786:
case 3603:
case 935:
case 548:
case 1842:
case 1073:
case 1731:
case 170:
case 3724:
case 258:
case 2892:
case 2927:
case 1411:
case 1506:
case 3800:
case 3889:
case 2560:
case 2625:
case 1732:
case 1841:
case 4069:
case 1156:
case 88:
case 2058:
case 1823:
case 3356:
case 4031:
case 3485:
case 3787:
case 2213:
case 3114:
case 1412:
case 3652:
case 732:
case 1314:
case 3259:
case 3064:
case 2038:
case 1687:
case 3804:
case 2181:
case 2474:
case 221:
case 4051:
case 3336:
case 1948:
case 1296:
case 1136:
case 2372:
case 2349:
case 3911:
case 3108:
case 3199:
case 793:
case 486:
case 3975:
case 308:
case 182:
case 4003:
case 477:
case 867:
case 1399:
case 1308:
case 2909:
case 2246:
case 420:
case 1229:
case 3914:
case 2258:
case 4054:
case 1410:
case 715:
case 3283:
case 1326:
case 3126:
case 2888:
case 2437:
case 2819:
case 971:
case 2013:
case 729:
case 216:
case 4034:
case 3175:
case 3908:
case 385:
case 2109:
case 2198:
case 23:
case 2370:
case 1311:
case 3061:
case 3722:
case 1750:
case 2894:
case 328:
case 3111:
case 655:
case 1936:
case 1148:
case 1:
case 1082:
case 2794:
case 2107:
case 1850:
case 3556:
case 3165:
case 569:
case 3413:
case 3015:
case 1365:
case 752:
case 1653:
case 375:
case 2788:
case 341:
case 2173:
case 2719:
case 1227:
case 2572:
case 165:
case 2439:
case 1633:
case 3701:
case 373:
case 3446:
case 3057:
case 2461:
case 2835:
case 487:
case 172:
case 2085:
case 297:
case 990:
case 866:
case 1618:
case 1852:
case 633:
case 3820:
case 2907:
case 3197:
case 3704:
case 3438:
case 1604:
case 4067:
case 25:
case 2973:
case 4042:
case 3257:
case 54:
case 635:
case 1832:
case 3789:
case 1084:
case 2256:
case 1877:
case 1767:
case 3824:
case 1958:
case 180:
case 1742:
case 1779:
case 1328:
case 1063:
case 1869:
case 3313:
case 1281:
case 402:
case 3642:
case 596:
case 823:
case 331:
case 2236:
case 30:
case 2605:
case 819:
case 3346:
case 1600:
case 521:
case 2048:
case 730:
case 2339:
case 1146:
case 3667:
case 2571:
case 3816:
case 1510:
case 1913:
case 2383:
case 1795:
case 3358:
case 1740:
case 3928:
case 1284:
case 805:
case 1263:
case 2745:
case 384:
case 2515:
case 2790:
case 3338:
case 32:
case 2036:
case 803:
case 955:
case 3049:
case 516:
case 238:
case 191:
case 3695:
case 3106:
case 3640:
case 1834:
case 3270:
case 53:
case 2678:
case 1559:
case 3097:
case 227:
case 920:
case 2414:
case 1180:
case 1982:
case 2312:
case 3793:
case 454:
case 3915:
case 169:
case 2207:
case 471:
case 2616:
case 861:
case 1668:
case 3937:
case 4055:
case 2408:
case 2499:
case 1561:
case 445:
case 3878:
case 1539:
case 3768:
case 2273:
case 3481:
case 4035:
case 3174:
case 1890:
case 1472:
case 2643:
case 3327:
case 1845:
case 1374:
case 778:
case 1337:
case 572:
case 3115:
case 639:
case 3463:
case 842:
case 2703:
case 900:
case 2426:
case 3137:
case 1980:
case 2310:
case 3382:
case 2751:
case 2624:
case 2007:
case 3974:
case 158:
case 1357:
case 0:
case 1927:
case 850:
case 2777:
case 2475:
case 1786:
case 3805:
case 2769:
case 602:
case 977:
case 270:
case 2842:
case 2879:
case 2412:
case 3480:
case 433:
case 3228:
case 357:
case 2620:
case 2565:
case 3866:
case 2732:
case 1560:
case 1625:
case 1963:
case 815:
case 2156:
case 580:
case 1058:
case 3507:
case 3776:
case 676:
case 2029:
case 2823:
case 2308:
case 2399:
case 1676:
case 282:
case 3006:
case 1998:
case 1909:
case 1246:
case 492:
case 2687:
case 3172:
case 1181:
case 2296:
case 2752:
case 829:
case 813:
case 1349:
case 3970:
case 2597:
case 2326:
case 895:
case 3028:
case 2730:
case 3384:
case 959:
case 1547:
case 1184:
case 1471:
case 78:
case 767:
case 1457:
case 1370:
case 724:
case 2:
case 2148:
case 3309:
case 3398:
case 1198:
case 412:
case 336:
case 2375:
case 1755:
case 13:
case 1238:
case 3855:
case 137:
case 3459:
case 1947:
case 275:
case 2071:
case 903:
case 3794:
case 3360:
case 1010:
case 604:
case 1160:
case 1307:
case 2822:
case 2556:
case 855:
case 3439:
case 574:
case 2701:
case 273:
case 3817:
case 844:
case 2274:
case 3173:
case 3719:
case 2753:
case 905:
case 1581:
case 1496:
case 3572:
case 3549:
case 1373:
case 2215:
case 1162:
case 3464:
case 2197:
case 2704:
case 1691:
case 3362:
case 1563:
case 397:
case 2965:
case 3347:
case 3085:
case 1429:
case 440:
case 3483:
case 624:
case 1825:
case 919:
case 3666:
case 560:
case 1210:
case 923:
case 262:
case 1876:
case 3973:
case 68:
case 1766:
case 348:
case 2718:
case 452:
case 749:
case 925:
case 156:
case 35:
case 1026:
case 147:
case 678:
case 722:
case 97:
case 2313:
case 1580:
case 3886:
case 1705:
case 3256:
case 2700:
case 414:
case 834:
case 2346:
case 3361:
case 1139:
case 1161:
case 2667:
case 2906:
case 2642:
case 2679:
case 1527:
case 1075:
case 231:
case 966:
case 3537:
case 1164:
case 3515:
case 702:
case 2702:
case 583:
case 494:
case 1226:
case 1014:
case 3383:
case 881:
case 1582:
case 3571:
case 3129:
case 1868:
case 1183:
case 1959:
case 189:
case 1778:
case 3056:
case 430:
case 1329:
case 810:
case 3996:
case 1099:
case 1893:
case 1008:
case 3678:
case 118:
case 2270:
case 2821:
case 2338:
case 1939:
case 528:
case 2843:
case 2072:
case 2049:
case 2793:
case 2915:
case 1385:
case 1047:
case 2937:
case 1743:
case 4022:
case 1112:
case 327:
case 3528:
case 993:
case 1513:
case 1910:
case 1062:
case 174:
case 859:
case 3643:
case 2327:
case 2596:
case 3621:
case 151:
case 3499:
case 279:
case 2878:
case 1716:
case 3895:
case 1060:
case 2382:
case 3624:
case 4020:
case 1558:
case 2484:
case 2171:
case 3007:
case 745:
case 1677:
case 2529:
case 1262:
case 307:
case 3703:
case 2065:
case 1631:
case 1538:
case 915:
case 246:
case 3769:
case 2805:
case 2409:
case 3731:
case 771:
case 2157:
case 1724:
case 556:
case 3411:
case 3506:
case 1448:
case 1800:
case 886:
case 547:
case 1818:
case 2776:
case 424:
case 1926:
case 712:
case 1787:
case 3412:
case 2480:
case 3620:
case 950:
case 1652:
case 1804:
case 652:
case 2172:
case 2573:
case 2427:
case 1199:
case 1108:
case 1632:
case 1975:
case 1239:
case 382:
case 3399:
case 800:
case 2006:
case 1914:
case 2384:
case 3622:
case 792:
case 1650:
case 3410:
case 2482:
case 183:
case 1059:
case 1264:
case 3326:
case 2028:
case 4016:
case 2655:
case 2309:
case 1175:
case 21:
case 3096:
case 1908:
case 185:
case 3375:
case 236:
case 3844:
case 1630:
case 518:
case 2972:
case 2206:
case 1111:
case 1833:
case 3936:
case 2170:
case 3148:
case 3:
case 3267:
case 1594:
case 1176:
case 3376:
case 2434:
case 918:
case 3040:
case 2078:
case 636:
case 2205:
case 863:
case 2636:
case 473:
case 2187:
case 3279:
case 4057:
case 3672:
case 1681:
case 1588:
case 2454:
case 2120:
case 748:
case 1862:
case 2922:
case 2897:
case 1772:
case 1749:
case 3325:
case 3955:
case 3468:
case 4015:
case 2799:
case 1125:
case 989:
case 865:
case 1847:
case 252:
case 3240:
case 2648:
case 1335:
case 3295:
case 2726:
case 2403:
case 1698:
case 872:
case 1202:
case 3873:
case 3042:
case 998:
case 36:
case 2431:
case 947:
case 2775:
case 376:
case 2469:
case 1925:
case 17:
case 1486:
case 1684:
case 2711:
case 3807:
case 2477:
case 2920:
case 2523:
case 550:
case 302:
case 880:
case 515:
case 2806:
case 431:
case 2567:
case 40:
case 125:
case 2121:
case 2579:
case 3674:
case 3505:
case 3780:
case 214:
case 529:
case 2924:
case 1774:
case 513:
case 1680:
case 2116:
case 811:
case 3829:
case 3425:
case 1201:
case 123:
case 1883:
case 3368:
case 119:
case 1771:
case 42:
case 2351:
case 2943:
case 1861:
case 4072:
case 322:
case 1435:
case 1545:
case 679:
case 532:
case 3044:
case 2430:
case 2303:
case 3896:
case 1993:
case 1968:
case 2369:
case 509:
case 2916:
case 1386:
case 1859:
case 1053:
case 2828:
case 3186:
case 2331:
case 3671:
case 1218:
case 1682:
case 3241:
case 2266:
case 1289:
case 826:
case 1001:
case 103:
case 593:
case 2124:
case 2759:
case 1728:
case 2105:
case 2696:
case 1342:
case 1379:
case 3940:
case 3543:
case 3179:
case 1444:
case 2392:
case 707:
case 3035:
case 3300:
case 2494:
case 1100:
case 3017:
case 2761:
case 3746:
case 2022:
case 3516:
case 2739:
case 684:
case 343:
case 3401:
case 1225:
case 2220:
case 371:
case 2488:
case 2419:
case 1613:
case 1102:
case 3967:
case 3404:
case 2874:
case 1503:
case 3217:
case 908:
case 446:
case 1395:
case 2178:
case 3235:
case 142:
case 764:
case 3758:
case 60:
case 3979:
case 727:
case 278:
case 2222:
case 4065:
case 1577:
case 1706:
case 3885:
case 2586:
case 1569:
case 2020:
case 1875:
case 3587:
case 49:
case 662:
case 1344:
case 1765:
case 2243:
case 392:
case 1479:
case 335:
case 2394:
case 1532:
case 2760:
case 1904:
case 1811:
case 3400:
case 3848:
case 2216:
case 2024:
case 821:
case 3301:
case 2607:
case 113:
case 1918:
case 2388:
case 1153:
case 2319:
case 7:
case 3941:
case 2966:
case 1826:
case 960:
case 3520:
case 3923:
case 1104:
case 1797:
case 673:
case 3402:
case 2043:
case 974:
case 2490:
case 2849:
case 2021:
case 1530:
case 1933:
case 2762:
case 132:
case 1899:
case 1440:
case 1808:
case 1093:
case 195:
case 41:
case 641:
case 3944:
case 436:
case 1495:
case 3141:
case 816:
case 1189:
case 4028:
case 1953:
case 1550:
case 1118:
case 3522:
case 599:
case 675:
case 2016:
case 1341:
case 3123:
case 83:
case 3697:
case 204:
case 1901:
case 2555:
case 1045:
case 1387:
case 3636:
case 3544:
case 2935:
case 2242:
case 3714:
case 2672:
case 155:
case 1443:
case 3332:
case 991:
case 2267:
case 2095:
case 1608:
case 2493:
case 2040:
case 3434:
case 837:
case 1699:
case 1756:
case 1292:
case 417:
case 1416:
case 2955:
case 3708:
case 1152:
case 1736:
case 559:
case 3897:
case 1614:
case 1290:
case 3403:
case 911:
case 2873:
case 2042:
case 568:
case 448:
case 3330:
case 1932:
case 26:
case 2763:
case 1245:
case 352:
case 2670:
case 3648:
case 775:
case 3987:
case 2135:
case 45:
case 1748:
case 3477:
case 3523:
case 3920:
case 1322:
case 1589:
case 856:
case 2566:
case 3541:
case 741:
case 1150:
case 2798:
case 2709:
case 3431:
case 4085:
case 276:
case 773:
case 4048:
case 3542:
case 3579:
case 1343:
case 1951:
case 1321:
case 2780:
case 2674:
case 3334:
case 784:
case 586:
case 3432:
case 1134:
case 190:
case 1931:
case 3685:
case 2829:
case 972:
case 239:
case 2986:
case 1316:
case 2425:
case 1969:
case 898:
case 607:
case 500:
case 134:
case 3452:
case 1977:
case 1420:
case 3354:
case 1219:
case 314:
case 3924:
case 1091:
case 438:
case 1502:
case 1934:
case 3595:
case 2657:
case 1846:
case 3943:
case 3540:
case 2578:
case 222:
case 1151:
case 520:
case 2671:
case 731:
case 963:
case 664:
case 2241:
case 3266:
case 2223:
case 394:
case 1422:
case 1291:
case 1131:
case 110:
case 1813:
case 1019:
case 2615:
case 4056:
case 818:
case 1169:
case 3828:
case 3857:
case 3392:
case 2300:
case 2433:
case 555:
case 2017:
case 1232:
case 638:
case 916:
case 2940:
case 2543:
case 2521:
case 1305:
case 3287:
case 901:
case 2179:
case 2142:
case 3815:
case 2453:
case 3220:
case 1796:
case 1252:
case 2628:
case 3488:
case 2055:
case 3419:
case 3761:
case 464:
case 2746:
case 1050:
case 427:
case 3022:
case 1882:
case 2516:
case 544:
case 243:
case 2401:
case 3905:
case 996:
case 2140:
case 168:
case 3178:
case 2942:
case 2979:
case 2235:
case 470:
case 1729:
case 4073:
case 860:
case 921:
case 2404:
case 3345:
case 1145:
case 3764:
case 1827:
case 1880:
case 3491:
case 3586:
case 3020:
case 2524:
case 378:
case 3222:
case 407:
case 958:
case 1576:
case 1707:
case 3870:
case 3492:
case 1234:
case 186:
case 2587:
case 94:
case 38:
case 3221:
case 3243:
case 235:
case 292:
case 3388:
case 697:
case 590:
case 2941:
case 3966:
case 1863:
case 1254:
case 808:
case 2923:
case 2665:
case 2520:
case 1188:
case 2353:
case 4029:
case 1773:
case 1119:
case 1660:
case 534:
case 3024:
case 1884:
case 1034:
case 757:
case 3747:
case 1478:
case 3535:
case 2944:
case 3517:
case 1203:
case 1881:
case 3043:
case 3490:
case 2304:
case 3021:
case 883:
case 1231:
case 120:
case 2697:
case 1191:
case 1269:
case 1054:
case 79:
case 3391:
case 969:
case 3166:
case 1647:
case 510:
case 1366:
case 3016:
case 1988:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749510001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,];
var gg_b = "1749510001/";

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
